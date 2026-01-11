from pydantic import BaseModel, Field, validator
from enum import Enum
from typing import List, Optional
from datetime import datetime
import uuid

class Priority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"

class Status(str, Enum):
    PENDING = "pending"
    DONE = "done"

class Task(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str = Field(..., min_length=1)
    created_at: datetime = Field(default_factory=datetime.now)
    due_date: Optional[datetime] = None
    priority: Priority = Priority.MEDIUM
    status: Status = Status.PENDING
    tags: List[str] = Field(default_factory=list)
    category: Optional[str] = None

class Project(BaseModel):
    name: str = Field(..., min_length=1)
    task_ids: List[str] = Field(default_factory=list)
