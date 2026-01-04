from typing import Optional
from datetime import datetime
import uuid
from sqlmodel import Field, Relationship, SQLModel
from .user import User

class TaskBase(SQLModel):
    title: str = Field(min_length=1)
    description: Optional[str] = None
    status: str = Field(default="pending") # pending, in-progress, completed
    priority: str = Field(default="medium") # low, medium, high
    due_date: Optional[datetime] = None
    tags: Optional[str] = None # Comma-separated tags for simplicity in SQL

class Task(TaskBase, table=True):
    id: Optional[uuid.UUID] = Field(default_factory=uuid.uuid4, primary_key=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    user_id: Optional[uuid.UUID] = Field(foreign_key="user.id")
    
    user: User = Relationship(back_populates="tasks")

class TaskCreate(TaskBase):
    pass

class TaskRead(TaskBase):
    id: uuid.UUID
    created_at: datetime
    user_id: uuid.UUID

class TaskUpdate(SQLModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[str] = None
    priority: Optional[str] = None
    due_date: Optional[datetime] = None
    tags: Optional[str] = None
