from datetime import datetime
from typing import Optional, List, Literal
from uuid import UUID
from sqlmodel import Session, select
from app.models.task import Task, TaskCreate, TaskUpdate

def list_tasks(session: Session, user_id: int, status: str = "all") -> List[Task]:
    """
    List tasks for the current user.
    
    Args:
        status: Filter by status ('pending', 'completed', 'all'). Defaults to 'all'.
    """
    stmt = select(Task).where(Task.user_id == user_id)
    if status.lower() != "all":
        stmt = stmt.where(Task.status == status.lower())
    return session.exec(stmt).all()

def add_task(
    session: Session, 
    user_id: int, 
    title: str, 
    description: Optional[str] = None,
    priority: str = "medium",
    due_date: Optional[datetime] = None,
    tags: Optional[str] = None
) -> Task:
    """
    Add a new task.
    
    Args:
        title: The title of the task.
        description: Optional details.
        priority: 'low', 'medium', or 'high'.
        due_date: Optional deadline.
        tags: Comma-separated tags string.
    """
    task = Task(
        title=title, 
        user_id=user_id,
        description=description,
        priority=priority,
        due_date=due_date,
        tags=tags
    )
    session.add(task)
    session.commit()
    session.refresh(task)
    return task

def complete_task(session: Session, user_id: int, task_id: int) -> str:
    """
    Mark a task as complete.
    
    Args:
        task_id: The ID of the task to complete.
    """
    task = session.get(Task, task_id)
    if not task or task.user_id != user_id:
        return "Task not found or permission denied."
    
    task.status = "completed"
    session.add(task)
    session.commit()
    return f"Task '{task.title}' marked as completed."

def delete_task(session: Session, user_id: int, task_id: int) -> str:
    """
    Delete a task.
    
    Args:
        task_id: The ID of the task to delete.
    """
    task = session.get(Task, task_id)
    if not task or task.user_id != user_id:
        return "Task not found or permission denied."
    
    session.delete(task)
    session.commit()
    return f"Task '{task.title}' deleted."

def update_task(session: Session, user_id: int, task_id: int, title: Optional[str] = None) -> str:
    """
    Update a task's details.
    
    Args:
        task_id: The ID of the task to update.
        title: The new title (optional).
    """
    task = session.get(Task, task_id)
    if not task or task.user_id != user_id:
        return "Task not found or permission denied."
    
    if title:
        task.title = title
        
    session.add(task)
    session.commit()
    session.refresh(task)
    return f"Task updated successfully."

def find_task_by_title(session: Session, user_id: int, title_query: str) -> Optional[Task]:
    """
    Find a task that matches a title query for the current user.
    """
    stmt = select(Task).where(Task.user_id == user_id)
    tasks = session.exec(stmt).all()
    
    title_query = title_query.lower().strip()
    
    # Try exact match first
    for t in tasks:
        if t.title.lower().strip() == title_query:
            return t
            
    # Try partial match
    for t in tasks:
        if title_query in t.title.lower():
            return t
            
    return None
