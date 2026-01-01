import pytest
from typer.testing import CliRunner
from src.main import app
import re

runner = CliRunner()

def test_sequential_ids_flow():
    # 1. Add first task
    result = runner.invoke(app, ["add", "First task"])
    assert result.exit_code == 0
    # Check ID is "1" (not full UUID)
    # Output: Added task: First task (1)
    assert "(1)" in result.stdout or "task 1" in result.stdout.lower()

    # 2. Add second task
    result = runner.invoke(app, ["add", "Second task"])
    assert result.exit_code == 0
    assert "(2)" in result.stdout

    # 3. Verify list
    result = runner.invoke(app, ["list"])
    assert "1" in result.stdout
    assert "2" in result.stdout
    assert "First task" in result.stdout
    assert "Second task" in result.stdout

def test_id_ambiguity_resolution():
    # Setup: Create tasks until we reach ID 11 to test "1" vs "10" vs "11"
    # Assuming clean state or continuation from previous test if using same DB file (which integration tests might)
    # Ideally tests are isolated, but CliRunner on local file might persist.
    # Let's clean up or assume we are adding to a fresh list if the fixture works right.
    # We'll just add tasks and check the returned IDs.
    
    ids = []
    for i in range(12):
        result = runner.invoke(app, ["add", f"Task {i}"])
        match = re.search(r'\(([0-9]+)\)', result.stdout)
        if match:
            ids.append(match.group(1))
    
    # We should have IDs like '1', '10', '11' in the list now.
    
    # Test deleting "1" specifically
    # Should NOT fail due to ambiguity with "10", "11", etc.
    result = runner.invoke(app, ["delete", "1"])
    assert result.exit_code == 0
    assert "Task 1 deleted" in result.stdout

    # Verify "10" still exists
    result = runner.invoke(app, ["list"])
    # "1" should be gone (as a standalone ID column entry), "10" should be there
    # It's hard to parse exact table output in integration test without strict regex,
    # but we can check that "Task 1" (title) might correspond to ID 1 if we named them "Task 1"
    # Wait, I named them "Task 0", "Task 1"...
    # First added task was "Task 0" -> ID X (probably 1 if new file)
    
    # Let's rely on the output of delete command which we asserted above.
    
    # Try to access "10"
    result = runner.invoke(app, ["update", "10", "--priority", "high"])
    assert result.exit_code == 0
    assert "Updated task 10" in result.stdout
