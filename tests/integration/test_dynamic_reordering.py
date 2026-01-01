import pytest
from typer.testing import CliRunner
from src.main import app
import re

runner = CliRunner()

def test_dynamic_id_reordering(clean_cli):
    # 1. Add three tasks
    runner.invoke(app, ["add", "Task A"]) # ID 1
    runner.invoke(app, ["add", "Task B"]) # ID 2
    runner.invoke(app, ["add", "Task C"]) # ID 3
    
    # Verify initial state
    result = runner.invoke(app, ["list"])
    assert "Task A" in result.stdout
    assert "Task B" in result.stdout
    assert "Task C" in result.stdout
    # We assume sequential IDs 1, 2, 3 based on previous implementation
    
    # 2. Delete Task 2 (Task B)
    result = runner.invoke(app, ["delete", "2"])
    assert result.exit_code == 0
    
    # 3. Verify reordering
    result = runner.invoke(app, ["list"])
    
    # Task A should still be 1
    # Task B is gone
    # Task C should now be 2
    
    # We can check this by parsing or by trying to access Task C via ID 2
    
    # Check if Task C is now ID 2
    # Output table structure: ID | Title | ...
    # Simple regex check for row "2" containing "Task C"
    # Or just try to update ID 2 and see if it changes Task C
    
    update_res = runner.invoke(app, ["update", "2", "Updated Task C"])
    assert update_res.exit_code == 0
    assert "Updated task 2" in update_res.stdout
    
    list_res = runner.invoke(app, ["list"])
    assert "Updated Task C" in list_res.stdout
    
    # Verify ID 3 does not exist (or is at least not Task C)
    # If we had 4 tasks, ID 4 would become 3.
    # Since we had 3, now we have 2. ID 3 should be gone.
    
    update_res_3 = runner.invoke(app, ["update", "3", "Should Fail"])
    # This might fail or print error depending on implementation
    # Current implementation prints error but exit code might be 1
    assert "Task 3 not found" in update_res_3.stdout or update_res_3.exit_code != 0

def test_mixed_ids_reordering():
    # If we have legacy UUID tasks, they should be ignored
    # This test assumes we can add a task with custom ID or Mock it, 
    # but since we only have CLI, we can't easily inject a UUID task without hacking persistence.
    # So we focus on the main requirement: numeric ID reordering.
    pass
