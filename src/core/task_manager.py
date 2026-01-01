from typing import List, Optional
from src.models.task import Task, Status, Priority
from src.core.persistence import PersistenceManager

class TaskManager:
    """Manages the high-level task operations including adding, listing, and completing tasks."""
    
    def __init__(self, persistence: PersistenceManager):
        """Initializes the TaskManager with a persistence layer."""
        self.persistence = persistence

    def add_task(self, task: Task):
        """Adds a new task to the storage."""
        tasks = self.persistence.load_tasks()
        tasks.append(task)
        self.persistence.save_tasks(tasks)

    def list_tasks(self, status: Optional[Status] = None, priority: Optional[Priority] = None) -> List[Task]:
        """Lists tasks filtered by status and priority."""
        tasks = self.persistence.load_tasks()
        
        if status:
            tasks = [t for t in tasks if t.status == status]
        
        if priority:
            tasks = [t for t in tasks if t.priority == priority]
            
        return tasks

    def complete_task(self, task_id: str) -> bool:
        """Marks a task as completed by its full or short ID."""
        tasks = self.persistence.load_tasks()
        found = False
        for t in tasks:
            # Match by full ID or short ID (first 8 chars)
            if t.id == task_id or t.id.startswith(task_id):
                t.status = Status.DONE
                found = True
                break
        
        if found:
            self.persistence.save_tasks(tasks)
        return found

    def get_task(self, task_id: str) -> Optional[Task]:
        """Gets a task by its full or short ID."""
        tasks = self.persistence.load_tasks()
        for t in tasks:
            if t.id == task_id or t.id.startswith(task_id):
                return t
        return None

    def get_task_by_id(self, task_id: str) -> Task:
        """
        Retrieves a single task by full or short ID.
        Raises ValueError if not found or if short ID is ambiguous.
        """
        tasks = self.persistence.load_tasks()
        matches = [t for t in tasks if t.id == task_id or t.id.startswith(task_id)]
        
        if not matches:
            raise ValueError(f"Task {task_id} not found")
        
        if len(matches) > 1:
            titles = ", ".join([f"'{t.title}'" for t in matches])
            raise ValueError(f"Multiple tasks match {task_id}: {titles}. Please use a longer ID.")
        
        return matches[0]

    def update_task(self, task_id: str, updates: dict) -> Task:
        """
        Updates an existing task with the provided fields.
        'updates' should be a dict of field names and new values.
        """
        tasks = self.persistence.load_tasks()
        # Find index to update in place
        idx = -1
        for i, t in enumerate(tasks):
            if t.id == task_id or t.id.startswith(task_id):
                # Verify unique match
                self.get_task_by_id(task_id) # Reuse validation logic
                idx = i
                break
        
        if idx == -1:
            raise ValueError(f"Task {task_id} not found")
            
        # Prevent updating protected fields
        updates.pop("id", None)
        updates.pop("created_at", None)
        
        # Merge updates
        updated_task = tasks[idx].model_copy(update=updates)
        tasks[idx] = updated_task
        
        self.persistence.save_tasks(tasks)
        return updated_task
