import json
import os
from typing import List
from pathlib import Path
from src.models.task import Task

class PersistenceManager:
    """Handles the loading and saving of tasks to a local JSON file."""
    
    def __init__(self, file_path: str):
        """Initializes the manager and ensures the data file exists."""
        self.file_path = Path(file_path)
        self._ensure_file_exists()

    def _ensure_file_exists(self):
        """Creates the data file with initial structure if it doesn't exist."""
        if not self.file_path.exists():
            self._write_initial_structure()
        else:
            try:
                with open(self.file_path, 'r') as f:
                    content = f.read()
                    if not content:
                        self._write_initial_structure()
                    else:
                        json.loads(content)
            except (json.JSONDecodeError, FileNotFoundError):
                self._write_initial_structure()

    def _write_initial_structure(self):
        """Writes the default JSON structure to the file."""
        self.file_path.parent.mkdir(parents=True, exist_ok=True)
        with open(self.file_path, 'w') as f:
            json.dump({"version": "1.0", "tasks": [], "config": {}}, f, indent=2)

    def load_tasks(self) -> List[Task]:
        """Loads tasks from the JSON file."""
        try:
            with open(self.file_path, 'r') as f:
                data = json.load(f)
            
            tasks_data = data.get("tasks", [])
            return [Task(**t) for t in tasks_data]
        except (FileNotFoundError, json.JSONDecodeError):
            return []

    def save_tasks(self, tasks: List[Task]):
        """Saves a list of tasks to the JSON file while preserving other config data."""
        existing_data = {}
        if self.file_path.exists():
            try:
                with open(self.file_path, 'r') as f:
                    existing_data = json.load(f)
            except:
                existing_data = {"version": "1.0", "config": {}}
        
        existing_data["tasks"] = [json.loads(t.model_dump_json()) for t in tasks]
        
        with open(self.file_path, 'w') as f:
            json.dump(existing_data, f, indent=2)
