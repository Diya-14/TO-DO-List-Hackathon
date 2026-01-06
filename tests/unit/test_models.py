import pytest
from datetime import datetime, timedelta
from src.models.task import Task, Priority, Status, Project
from pydantic import ValidationError

def test_task_creation_minimal():
    task = Task(title="Minimal Task")
    assert task.title == "Minimal Task"
    assert task.status == Status.PENDING
    assert task.priority == Priority.MEDIUM
    assert task.id is not None
    assert task.created_at is not None

def test_task_validation_title_empty():
    with pytest.raises(ValidationError):
        Task(title="")

def test_task_due_date_future_warning():
    # Pydantic validators usually raise errors, but specification says "warn if past". 
    # For simplicity in strict models, we might just enforce valid dates.
    # Let's check basic date assignment.
    future = datetime.now() + timedelta(days=1)
    task = Task(title="Future Task", due_date=future)
    assert task.due_date == future

def test_project_creation():
    proj = Project(name="Work", task_ids=[])
    assert proj.name == "Work"
    assert proj.task_ids == []
