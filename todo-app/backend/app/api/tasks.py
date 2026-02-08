from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select

from app.api import deps
from app.core.db import get_session
from app.models.task import Task, TaskCreate, TaskRead, TaskUpdate
from app.models.user import User

router = APIRouter()

@router.get("", response_model=List[TaskRead])
def read_tasks(
    session: Session = Depends(get_session),
    current_user: User = Depends(deps.get_current_user),
    skip: int = 0,
    limit: int = 100,
) -> Any:
    print(f"DEBUG: Fetching tasks for user: {current_user.email} (ID: {current_user.id})")
    statement = select(Task).where(Task.user_id == current_user.id).offset(skip).limit(limit)
    tasks = session.exec(statement).all()
    print(f"DEBUG: Found {len(tasks)} tasks")
    return tasks

@router.post("", response_model=TaskRead)
def create_task(
    *,
    session: Session = Depends(get_session),
    task_in: TaskCreate,
    current_user: User = Depends(deps.get_current_user),
) -> Any:
    print(f"DEBUG: Creating task for user: {current_user.id}. Title: {task_in.title}")
    task = Task.model_validate(task_in, update={"user_id": current_user.id})
    session.add(task)
    session.commit()
    session.refresh(task)
    print(f"DEBUG: Task created with ID: {task.id}")
    return task

@router.get("/{task_id}", response_model=TaskRead)
def read_task(
    task_id: int,
    session: Session = Depends(get_session),
    current_user: User = Depends(deps.get_current_user),
) -> Any:
    task = session.get(Task, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    if task.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    return task

@router.patch("/{task_id}", response_model=TaskRead)
def update_task(
    *,
    task_id: int,
    session: Session = Depends(get_session),
    task_in: TaskUpdate,
    current_user: User = Depends(deps.get_current_user),
) -> Any:
    task = session.get(Task, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    if task.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    update_data = task_in.model_dump(exclude_unset=True)
    task.sqlmodel_update(update_data)
    session.add(task)
    session.commit()
    session.refresh(task)
    return task

@router.delete("/{task_id}")
def delete_task(
    *,
    task_id: int,
    session: Session = Depends(get_session),
    current_user: User = Depends(deps.get_current_user),
) -> Any:
    task = session.get(Task, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    if task.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    session.delete(task)
    session.commit()
    return {"ok": True}