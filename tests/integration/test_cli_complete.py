import pytest
from typer.testing import CliRunner
from src.main import app
import re

runner = CliRunner()

def test_complete_task_flow():
    # 1. Add a task
    result = runner.invoke(app, ["add", "Complete me"])
    assert result.exit_code == 0
    match = re.search(r'\(([0-9]+)\)', result.stdout)
    assert match
    task_id = match.group(1)
    
    # 2. Complete it
    result = runner.invoke(app, ["complete", task_id])
    assert result.exit_code == 0
    assert f"Task {task_id} marked as completed" in result.stdout
    
    # 3. Verify status in list
    result = runner.invoke(app, ["list"])
    # Should show as DONE (green) or check status column if possible.
    # The list command output contains "done" status.
    # We can check if it's NOT in pending if list defaults to pending?
    # No, list shows all by default or filtered?
    # Let's check `commands.py`: `list_tasks(status=status...)`. Default is None (all).
    assert "done" in result.stdout.lower()

def test_complete_non_existent():
    result = runner.invoke(app, ["complete", "99999"])
    assert result.exit_code == 0
    assert "Task 99999 not found" in result.stdout
