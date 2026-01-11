import os
import json
import time
import re
from datetime import datetime
from typing import List, Dict, Any, Optional
from uuid import UUID
from sqlmodel import Session
import google.generativeai as genai
from google.generativeai.types import FunctionDeclaration, Tool
from google.api_core.exceptions import ResourceExhausted, NotFound

from app.models.conversation import Conversation
from app.core import tools
from app.core.config import settings

# Configure Gemini
if settings.GEMINI_API_KEY:
    genai.configure(api_key=settings.GEMINI_API_KEY)

def emergency_local_fallback(session: Session, user_id: UUID, message: str) -> str:
    """
    Simple regex-based fallback if AI is unavailable.
    """
    msg_lower = message.lower()
    
    # List tasks
    if "list" in msg_lower or "show" in msg_lower:
        if "completed" in msg_lower:
            tasks = tools.list_tasks(session, user_id, "completed")
            status = "completed"
        elif "pending" in msg_lower:
            tasks = tools.list_tasks(session, user_id, "pending")
            status = "pending"
        else:
            tasks = tools.list_tasks(session, user_id, "all")
            status = "all"
            
        if not tasks:
            return f"You have no {status} tasks."
        
        response = f"Here are your {status} tasks:\n"
        for t in tasks:
            response += f"- {t.title} (ID: {t.id})\n"
        return response

    # Add task
    # Pattern: "add [task title]" or "add task [task title]"
    if msg_lower.startswith("add"):
        title = re.sub(r"^add\s+(task\s+)?", "", message, flags=re.IGNORECASE).strip()
        
        # Simple priority detection for fallback
        priority = "medium"
        if "urgent" in title.lower() or "high priority" in title.lower():
            priority = "high"
        elif "low priority" in title.lower():
            priority = "low"
            
        if title:
            task = tools.add_task(session, user_id, title, priority=priority)
            return f"Added task: {task.title} (Priority: {priority})"
        else:
            return "What task would you like to add?"

    # Complete task
    # This is hard without AI to extract UUIDs precisely from partial text, 
    # but we can try to match exact ID if pasted, or just say sorry.
    # For now, simplistic fallback:
    return "I'm currently offline (Quota/Connection Error) and can only understand simple commands like 'List tasks' or 'Add buy milk'."

def resolve_task_indices(session: Session, user_id: UUID, message: str) -> str:
    """
    If the user says "task 1" or "delete number 3", we need to map that number 
    to a real UUID from their current task list.
    """
    # Regex to find "task N" or "#N" or just "number N"
    # Matches: "task 1", "task #1", "#1", "item 1", "number 1"
    # We carefully avoid matching "1 apple" by requiring a preceding keyword or symbol
    pattern = r"(?:task|item|number|#)\s*(\d+)"
    
    matches = list(re.finditer(pattern, message, re.IGNORECASE))
    
    if not matches:
        return message

    # Fetch tasks to build the map
    tasks = tools.list_tasks(session, user_id, "all")
    # Sort by created_at usually, or how they are displayed. 
    # Ideally this matches the 'list_tasks' output order.
    # We'll assume ID order or created_at. Let's do created_at for stability.
    tasks.sort(key=lambda t: t.created_at)

    new_message = message
    # Replace from end to start to not mess up indices
    for match in reversed(matches):
        idx_str = match.group(1)
        try:
            idx = int(idx_str) - 1 # User is 1-based
            if 0 <= idx < len(tasks):
                real_uuid = str(tasks[idx].id)
                # Replace "task 1" with "task <UUID>" so the tool understands it
                start, end = match.span()
                new_message = new_message[:start] + f"task {real_uuid}" + new_message[end:]
            else:
                # Index out of bounds - leave it, model might explain or ask
                pass
        except ValueError:
            pass
            
    return new_message

def process_chat(session: Session, user_id: UUID, message: str, history: List[Conversation]) -> str:
    if not settings.GEMINI_API_KEY:
        return "I'm having trouble connecting to my brain. Please ensure GEMINI_API_KEY is set in the backend .env file."
        
    # Pre-process message to resolve "task 1" references
    processed_message = resolve_task_indices(session, user_id, message)

    # 1. Define Tools
    def list_tasks_tool(status: str = "all"):
        """List tasks for the current user. Filter by status ('pending', 'completed', 'all')."""
        tasks = tools.list_tasks(session, user_id, status)
        return [t.model_dump(mode='json') for t in tasks]

    def add_task_tool(
        title: str, 
        description: str = None, 
        priority: str = "medium", 
        due_date_str: str = None,
        tags: str = None
    ):
        """
        Add a new task. 
        
        Args:
            title: Title of the task.
            description: Optional details.
            priority: 'low', 'medium', or 'high'.
            due_date_str: ISO format date string (YYYY-MM-DD) if applicable.
            tags: Comma-separated tags (e.g., 'work,urgent').
        """
        dt = None
        if due_date_str:
            try:
                dt = datetime.fromisoformat(due_date_str)
            except:
                pass # Ignore invalid dates for now
                
        task = tools.add_task(
            session, 
            user_id, 
            title, 
            description=description, 
            priority=priority, 
            due_date=dt, 
            tags=tags
        )
        return task.model_dump(mode='json')

    def complete_task_tool(task_id: str):
        """Mark a task as completed. Requires task_id UUID string."""
        try:
            tid = UUID(task_id)
            return tools.complete_task(session, user_id, tid)
        except ValueError:
            return "Invalid Task ID format."

    def delete_task_tool(task_id: str):
        """Delete a task. Requires task_id UUID string."""
        try:
            tid = UUID(task_id)
            return tools.delete_task(session, user_id, tid)
        except ValueError:
            return "Invalid Task ID format."

    def update_task_tool(task_id: str, title: str):
        """Update a task's title. Requires task_id UUID string and new title."""
        try:
            tid = UUID(task_id)
            return tools.update_task(session, user_id, tid, title=title)
        except ValueError:
            return "Invalid Task ID format."

    my_tools = [list_tasks_tool, add_task_tool, complete_task_tool, delete_task_tool, update_task_tool]
    
    system_instruction = """
    You are a smart To-Do List Assistant.
    Your goal is to help the user manage their tasks using the provided tools.
    
    Rules:
    1. If the user asks to "list" or "show" tasks, ALWAYS use the `list_tasks_tool`.
    2. If the user refers to a task by ID (which is a UUID), use that ID directly.
    3. If the user says "add task...", extract details like description, priority, etc.
    4. Be concise and friendly.
    5. If a tool call is successful, briefly confirm the action (e.g., "Added 'Buy Milk'.").
    """

    # Models to try in order of preference/cost
    # 2.0-flash-lite is cheapest/fastest. 2.0-flash is standard. 1.5-flash is older stable.
    models_to_try = [
        'gemini-2.0-flash-lite',
        'gemini-2.0-flash',
        'gemini-2.5-flash',
        'gemini-1.5-flash'
    ]

    last_error = None

    for model_name in models_to_try:
        try:
            try:
                print(f"Attempting with model: {model_name}")
            except UnicodeEncodeError:
                pass
            
            model = genai.GenerativeModel(
                model_name=model_name, 
                tools=my_tools,
                system_instruction=system_instruction
            )

            # Build History (Limited to last 5 to save tokens)
            chat_history = []
            for msg in history[-5:]:
                role = "user" if msg.role == "user" else "model"
                chat_history.append({"role": role, "parts": [msg.message_text]})

            chat = model.start_chat(history=chat_history, enable_automatic_function_calling=True)

            # Try to send message
            response = chat.send_message(processed_message)
            
            if response.text:
                return response.text
            else:
                return "Task processed successfully."
                
        except (ResourceExhausted, NotFound) as e:
            print(f"Model {model_name} quota or availability issue: {e}")
            last_error = e
            continue
        except Exception as e:
            print(f"Unexpected error with {model_name}: {e}")
            last_error = e
            continue

    # If all models fail, fall back to local logic
    print(f"All AI models failed. Last error: {last_error}")
    try:
        fallback_res = emergency_local_fallback(session, user_id, processed_message)
        return fallback_res
    except Exception as e:
        return f"I'm having trouble connecting to Gemini. (Error: {str(last_error or 'Unknown')}). Please check your API key and internet connection."