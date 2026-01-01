import pytest
import os
import tempfile
import json
from pathlib import Path

@pytest.fixture
def temp_db():
    with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.json') as tmp:
        json.dump({"tasks": [], "config": {}}, tmp)
        tmp_path = tmp.name
    
    yield tmp_path
    
    if os.path.exists(tmp_path):
        os.remove(tmp_path)