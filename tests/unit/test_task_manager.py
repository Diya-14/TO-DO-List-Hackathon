import pytest
from src.core.task_manager import TaskManager
from src.core.persistence import PersistenceManager
from src.models.task import Task, Priority

@pytest.fixture
def task_manager(temp_db):
    pm = PersistenceManager(file_path=temp_db)
    return TaskManager(pm)

def test_get_task_by_id_unique(task_manager):
    task = Task(title="Test Task")
    task_manager.add_task(task)
    
    retrieved = task_manager.get_task_by_id(task.id[:8])
    assert retrieved.id == task.id
    assert retrieved.title == "Test Task"

def test_get_task_by_id_not_found(task_manager):
    with pytest.raises(ValueError, match="not found"):
        task_manager.get_task_by_id("nonexistent")

def test_get_task_by_id_ambiguous(task_manager):
    # Create two tasks with same short ID prefix if possible
    # Forcing IDs for testing ambiguity
    task1 = Task(id="abcdef12-1111-1111-1111-111111111111", title="Task 1")
    task2 = Task(id="abcdef12-2222-2222-2222-222222222222", title="Task 2")
    
    task_manager.persistence.save_tasks([task1, task2])
    
    with pytest.raises(ValueError, match="Multiple tasks match"):
        task_manager.get_task_by_id("abcdef12")

def test_update_task_success(task_manager):
    task = Task(title="Old Title", priority=Priority.MEDIUM)
    task_manager.add_task(task)
    
    updated = task_manager.update_task(task.id, {"title": "New Title", "priority": Priority.HIGH})
    assert updated.title == "New Title"
    assert updated.priority == Priority.HIGH
    
    # Verify persistence
    reloaded = task_manager.get_task_by_id(task.id)
    assert reloaded.title == "New Title"

def test_update_task_preserves_others(task_manager):
    task = Task(title="Title", priority=Priority.LOW, category="Work")
    task_manager.add_task(task)
    
    updated = task_manager.update_task(task.id, {"priority": Priority.HIGH})
    assert updated.priority == Priority.HIGH
    assert updated.title == "Title"
    assert updated.category == "Work"
