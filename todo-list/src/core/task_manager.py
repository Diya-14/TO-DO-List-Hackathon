from typing import List, Optional
from src.models.task import Task, Status, Priority
from src.core.persistence import PersistenceManager

class TaskManager:
    """Manages the high-level task operations including adding, listing, and completing tasks."""
    
    def __init__(self, persistence: PersistenceManager):
        """Initializes the TaskManager with a persistence layer."""
        self.persistence = persistence

    def add_task(self, task: Task):
        """Adds a new task to the storage with a sequential integer ID."""
        tasks = self.persistence.load_tasks()
        
        # Calculate next ID
        max_id = 0
        for t in tasks:
            if t.id.isdigit():
                current_id = int(t.id)
                if current_id > max_id:
                    max_id = current_id
        
        new_id = str(max_id + 1)
        task.id = new_id
        
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
        
        # Logic to find the correct task index
        target_task = None
        try:
            target_task = self.get_task_by_id(task_id)
        except ValueError:
            return False
            
        for t in tasks:
            if t.id == target_task.id:
                t.status = Status.DONE
                self.persistence.save_tasks(tasks)
                return True
        return False

    def get_task(self, task_id: str) -> Optional[Task]:
        """Gets a task by its full or short ID."""
        try:
            return self.get_task_by_id(task_id)
        except ValueError:
            return None

    def get_task_by_id(self, task_id: str) -> Task:
        """
        Retrieves a single task by full or short ID.
        Prioritizes exact matches.
        Raises ValueError if not found or if short ID is ambiguous.
        """
        tasks = self.persistence.load_tasks()
        
        # 1. Try exact match
        exact_matches = [t for t in tasks if t.id == task_id]
        if len(exact_matches) == 1:
            return exact_matches[0]
        
        # 2. Try prefix match
        matches = [t for t in tasks if t.id.startswith(task_id)]
        
        if not matches:
            raise ValueError(f"Task {task_id} not found")
        
        if len(matches) > 1:
            # If we have multiple matches, but one is an exact match, we should have caught it above.
            # If we are here, it means we have multiple prefix matches and no exact match
            # OR (edge case) multiple exact matches which shouldn't happen with unique IDs.
            
            # Wait, if task_id="1" and we have "1" and "10". 
            # Step 1 catches "1". Returns.
            # If task_id="1" and we have ONLY "10". 
            # Step 1 fails. Step 2 matches "10". Returns "10".
            # If task_id="1" and we have "10" and "11".
            # Step 1 fails. Step 2 matches both. Raises error. Correct.
            
            titles = ", ".join([f"'{t.title}' ({t.id})" for t in matches])
            raise ValueError(f"Multiple tasks match {task_id}: {titles}. Please use a more specific ID.")
        
        return matches[0]

    def update_task(self, task_id: str, updates: dict) -> Task:
        """
        Updates an existing task with the provided fields.
        'updates' should be a dict of field names and new values.
        """
        tasks = self.persistence.load_tasks()
        
        # Validate existence and resolve ID
        target_task = self.get_task_by_id(task_id)
        
        # Find index
        idx = -1
        for i, t in enumerate(tasks):
            if t.id == target_task.id:
                idx = i
                break
        
        if idx == -1:
            # Should not happen if get_task_by_id succeeded
            raise ValueError(f"Task {task_id} not found")
            
        # Prevent updating protected fields
        updates.pop("id", None)
        updates.pop("created_at", None)
        
        # Merge updates
        updated_task = tasks[idx].model_copy(update=updates)
        tasks[idx] = updated_task
        
        self.persistence.save_tasks(tasks)
        return updated_task

    def delete_task(self, task_id: str) -> bool:
        """Deletes a task by its full or short ID and reorders subsequent numeric IDs."""
        tasks = self.persistence.load_tasks()
        
        try:
            target_task = self.get_task_by_id(task_id)
            deleted_id = target_task.id
            
            # Remove the task
            new_tasks = [t for t in tasks if t.id != deleted_id]
            
            if len(new_tasks) < len(tasks):
                # If deleted task had a numeric ID, reorder subsequent tasks
                if deleted_id.isdigit():
                    deleted_int = int(deleted_id)
                    for t in new_tasks:
                        if t.id.isdigit():
                            current_int = int(t.id)
                            if current_int > deleted_int:
                                t.id = str(current_int - 1)
                
                self.persistence.save_tasks(new_tasks)
                return True
            return False
            
        except ValueError:
            return False
