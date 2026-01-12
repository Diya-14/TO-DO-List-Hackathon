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
    Advanced regex fallback. Supports: Add, List, Delete by Name, Complete by Name.
    """
    msg_lower = message.lower()
    
    # 1. List Tasks
    if any(k in msg_lower for k in ["list", "show", "get"]):
        status = "pending" if "pending" in msg_lower else ("completed" if "completed" in msg_lower else "all")
        tasks = tools.list_tasks(session, user_id, status)
        if not tasks: return f"You have no {status} tasks."
        response = f"Your {status} tasks:\n"
        for i, t in enumerate(tasks, 1):
            response += f"{i}. {'✅' if t.status == 'completed' else '⏳'} {t.title}\n"
        return response

    # 2. Add Task
    if msg_lower.startswith("add") or msg_lower.startswith("create"):
        title = re.sub(r"^(add|create)\s+(task\s+)?", "", message, flags=re.IGNORECASE).strip()
        if title:
            task = tools.add_task(session, user_id, title)
            return f"Added: '{task.title}'"
        return "What task should I add?"

    # 3. Complete Task by Name
    if any(k in msg_lower for k in ["complete", "finish", "done"]):
        query = re.sub(r"^(complete|finish|done|mark)\s+(task\s+)?", "", message, flags=re.IGNORECASE).strip()
        task = tools.find_task_by_title(session, user_id, query)
        if task: return tools.complete_task(session, user_id, task.id)
        return f"I couldn't find a task named '{query}' to complete."

    # 4. Delete Task by Name
    if "delete" in msg_lower or "remove" in msg_lower:
        query = re.sub(r"^(delete|remove)\s+(task\s+)?", "", message, flags=re.IGNORECASE).strip()
        task = tools.find_task_by_title(session, user_id, query)
        if task: return tools.delete_task(session, user_id, task.id)
        return f"I couldn't find a task named '{query}' to delete."

    return "I'm in Emergency Mode. Try 'Add milk', 'List tasks', 'Complete milk', or 'Delete milk'."

def resolve_task_indices(session: Session, user_id: UUID, message: str) -> str:
    pattern = r"(?:task|item|number|#)\s*(\d+)"
    matches = list(re.finditer(pattern, message, re.IGNORECASE))
    if not matches: return message
    tasks = tools.list_tasks(session, user_id, "all")
    tasks.sort(key=lambda t: t.created_at)
    new_message = message
    for match in reversed(matches):
        idx_str = match.group(1)
        try:
            idx = int(idx_str) - 1
            if 0 <= idx < len(tasks):
                new_message = new_message[:match.start()] + f"task {str(tasks[idx].id)}" + new_message[match.end():]
        except: pass
    return new_message

def process_chat(session: Session, user_id: UUID, message: str, history: List[Conversation]) -> str:
    if not settings.GEMINI_API_KEY:
        return "Please set GEMINI_API_KEY."
        
    processed_message = resolve_task_indices(session, user_id, message)

    def list_tasks_tool(status: str = "all"):
        """List tasks. Filter: 'pending', 'completed', 'all'."""
        return [t.model_dump(mode='json') for t in tools.list_tasks(session, user_id, status)]

    def add_task_tool(title: str, priority: str = "medium"):
        """Add a new task."""
        return tools.add_task(session, user_id, title, priority=priority).model_dump(mode='json')

    def complete_task_tool(task_id: str):
        """Complete task by UUID string."""
        return tools.complete_task(session, user_id, UUID(task_id))

    def delete_task_tool(task_id: str):
        """Delete task by UUID string."""
        return tools.delete_task(session, user_id, UUID(task_id))

    my_tools = [list_tasks_tool, add_task_tool, complete_task_tool, delete_task_tool]
    
    system_instruction = """
    You are a smart To-Do Assistant.
    
    CRITICAL RULE:
    If the user asks to complete, delete, or update a task by NAME (e.g., "Complete laundry"), 
    you MUST first use `list_tasks_tool()` to find the correct UUID for that task, 
    and THEN call the appropriate tool with that UUID.

    If you cannot find the task in the list, ask the user for clarification.
    """

    models_to_try = ['gemini-2.0-flash-lite', 'gemini-2.0-flash', 'gemini-1.5-flash']
    last_error = None

    for model_name in models_to_try:
        try:
            model = genai.GenerativeModel(model_name=model_name, tools=my_tools, system_instruction=system_instruction)
            chat_history = []
            for msg in history[-5:]:
                chat_history.append({"role": "user" if msg.role == "user" else "model", "parts": [msg.message_text]})
            chat = model.start_chat(history=chat_history, enable_automatic_function_calling=True)
            response = chat.send_message(processed_message)
            return response.text if response.text else "Done! ✅"
        except Exception as e:
            last_error = e
            continue

    return emergency_local_fallback(session, user_id, processed_message)