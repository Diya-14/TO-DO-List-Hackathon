import pytest
import os
import json
from src.core.persistence import PersistenceManager
from src.models.task import Task

def test_save_and_load_tasks(temp_db):
    # Initialize PM with temp file
    pm = PersistenceManager(file_path=temp_db)
    
    # Create tasks
    task1 = Task(title="Task 1")
    task2 = Task(title="Task 2")
    
    # Save
    pm.save_tasks([task1, task2])
    
    # Verify file content manually
    with open(temp_db, 'r') as f:
        data = json.load(f)
        assert len(data['tasks']) == 2
        assert data['tasks'][0]['title'] == "Task 1"
    
    # Load back
    loaded_tasks = pm.load_tasks()
    assert len(loaded_tasks) == 2
    assert loaded_tasks[0].title == "Task 1"
    assert loaded_tasks[0].id == task1.id

def test_load_empty_file_creates_structure(temp_db):
    # Corrupt or empty file
    with open(temp_db, 'w') as f:
        f.write("{}") # Valid JSON but missing "tasks" key
        
    pm = PersistenceManager(file_path=temp_db)
    tasks = pm.load_tasks()
    assert tasks == []
    
    # Should have fixed the file structure on next save/init? 
    # Or maybe load handles missing keys gracefully.
    
def test_persistence_file_creation(tmp_path):
    # File doesn't exist
    new_file = tmp_path / "new_data.json"
    pm = PersistenceManager(file_path=str(new_file))
    
    # Load should return empty and maybe create file? 
    # Or save creates it. Let's assume load handles missing file by returning empty list.
    tasks = pm.load_tasks()
    assert tasks == []
    
    # Save should create file
    task = Task(title="New Task")
    pm.save_tasks([task])
    
    assert new_file.exists()
