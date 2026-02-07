import pytest
from typer.testing import CliRunner
from cli.main import app  # Assuming your typer app is in cli/main.py
from cli.core.task_manager import TaskManager
from cli.models.task import Task, Priority
from unittest.mock import patch, MagicMock
from datetime import datetime, timedelta
import uuid

runner = CliRunner()

@pytest.fixture
def tasks_in_memory():
    """ Provides a clean in-memory list for tasks for each test """
    return []

@pytest.fixture
def mock_persistence(tasks_in_memory):
    """ Provides a mock PersistenceManager that operates on tasks_in_memory """
    mock_p = MagicMock()
    mock_p.load_tasks.side_effect = lambda: list(tasks_in_memory)
    mock_p.save_tasks.side_effect = lambda tasks: (tasks_in_memory.clear(), tasks_in_memory.extend(tasks))
    return mock_p

def test_update_task_with_nlp(mock_persistence):
    """ Test updating a task's priority and due date via NLP """
    # 1. Setup: Create a task and patch the task manager
    original_task = Task(title="Original Task") # Don't assign ID, let add_task do it
    
    # Create the TaskManager that the CLI commands will use
    tm_for_cli = TaskManager(mock_persistence)
    tm_for_cli.add_task(original_task) # Add task using TaskManager to get proper ID
    task_id = original_task.id # Get the ID assigned by TaskManager
    
    # Patch dependencies for the CLI commands
    with patch('cli.commands.get_task_manager_instance', return_value=tm_for_cli), \
         patch('cli.commands.NLParser') as MockNLParser:
        # Configure the mock NLParser to return specific parsed data
        mock_nlp_instance = MockNLParser.return_value
        mock_nlp_instance.parse.return_value = {
            "priority": Priority.HIGH,
            "due_date": datetime.now() + timedelta(days=1), # Tomorrow
            "title": "Original Task" # NLP usually returns title too
        }

        # 2. Execute: Run the update command with NLP
        result = runner.invoke(app, ["update", str(task_id), "change to high priority and due tomorrow"], catch_exceptions=False)

        # 3. Assert: Check for success and that the task was updated
        assert result.exit_code == 0
        assert "Updated task" in result.stdout

        updated_task = tm_for_cli.get_task_by_id(str(task_id))
        
        assert updated_task.priority == Priority.HIGH
        assert updated_task.due_date is not None
        # Check if the due date is in the future (tomorrow)
        # Using a small delta for comparison due to potential microsecond differences
        assert updated_task.due_date.date() == (datetime.now() + timedelta(days=1)).date()

def test_update_task_with_flags(mock_persistence):
    """ Test updating a task via explicit CLI flags """
    original_task = Task(title="Original Task", priority=Priority.LOW)
    tm_for_cli = TaskManager(mock_persistence)
    tm_for_cli.add_task(original_task)
    task_id = original_task.id

    with patch('cli.commands.get_task_manager_instance', return_value=tm_for_cli):
        # Update title and priority via flags
        result = runner.invoke(app, ["update", str(task_id), "--title", "New Title", "--priority", "high"], catch_exceptions=False)

        assert result.exit_code == 0
        assert "Updated task" in result.stdout
        assert "Title: New Title" in result.stdout
        assert "Priority: high" in result.stdout

        updated_task = tm_for_cli.get_task_by_id(str(task_id))
        assert updated_task.title == "New Title"
        assert updated_task.priority == Priority.HIGH

def test_update_task_not_found(mock_persistence):
    """ Test that update command handles missing tasks gracefully """
    tm_for_cli = TaskManager(mock_persistence)
    # No tasks added
    
    with patch('cli.commands.get_task_manager_instance', return_value=tm_for_cli):
        result = runner.invoke(app, ["update", "999", "some text"])
        assert result.exit_code == 1
        assert "Error: Task 999 not found" in result.stdout

def test_update_task_ambiguous_id(mock_persistence):
    """ Test that update command handles ambiguous short IDs """
    tm_for_cli = TaskManager(mock_persistence)
    t1 = Task(id="10", title="Task 10")
    t2 = Task(id="11", title="Task 11")
    mock_persistence.save_tasks([t1, t2])
    
    with patch('cli.commands.get_task_manager_instance', return_value=tm_for_cli):
        result = runner.invoke(app, ["update", "1", "some text"])
        assert result.exit_code == 1
        assert "Error: Multiple tasks match 1" in result.stdout

def test_add_task_output(mock_persistence):
    """ Test that the add command produces expected output """
    # Create the TaskManager that the CLI commands will use
    tm_for_cli = TaskManager(mock_persistence)
    
    with patch('cli.commands.get_task_manager_instance', return_value=tm_for_cli), \
         patch('cli.commands.NLParser') as MockNLParser: # Need to patch NLParser too
        # Configure a dummy parser for add command (not strictly necessary but good practice)
        mock_nlp_instance = MockNLParser.return_value
        mock_nlp_instance.parse.return_value = {
            "title": "Test task",
            "priority": Priority.MEDIUM,
            "due_date": None,
            "category": None
        }
        
        result = runner.invoke(app, ["add", "Test task"], catch_exceptions=False)
        assert result.exit_code == 0
        assert "Added task: Test task" in result.stdout # Updated assertion for the new print format

# More tests will be added here
