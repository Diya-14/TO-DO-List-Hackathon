---
id: 016
title: implement-dynamic-id-reordering
stage: general
date: 2026-01-01
surface: agent
model: gemini-2.0-flash-exp
feature: none
branch: main
user: user
command: implement-id-reordering
labels: [feature, logic, ids]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/core/task_manager.py
  - tests/integration/test_dynamic_reordering.py
tests:
  - tests/integration/test_dynamic_reordering.py
---

# User Prompt

ok one thing in todo list if i dlete in 2 option so option 3 id is 3 so if i delete option 2 so option 3 become 2

# Assistant Response

I implemented dynamic ID reordering logic to ensure that when a task with a numeric ID is deleted, all subsequent numeric IDs shift down to fill the gap (e.g., deleting ID 2 makes ID 3 become ID 2).

**Changes:**
1.  **Logic**: Updated `delete_task` in `src/core/task_manager.py` to identify the deleted ID and decrement all larger numeric IDs by 1.
2.  **Verification**: Created `tests/integration/test_dynamic_reordering.py` (and fixed its isolation using `clean_cli`) to confirm that deleting task 2 correctly renames task 3 to task 2.

**Behavior:**
-   Add Task A (1)
-   Add Task B (2)
-   Add Task C (3)
-   Delete Task B (2) -> Task C becomes ID 2.
