---
id: 012
title: implement-sequential-ids
stage: general
date: 2026-01-01
surface: agent
model: gemini-2.0-flash-exp
feature: none
branch: main
user: user
command: implement-sequential-ids
labels: [feature, refactor, ids]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/core/task_manager.py
  - tests/integration/test_sequential_ids.py
tests:
  - tests/integration/test_sequential_ids.py
---

# User Prompt

ok listen you can use id in long digit this can't be remeber so in id number start with 1, 2, 3 and so on not a long digit

# Assistant Response

I have updated the ID generation logic to use simple sequential integers (1, 2, 3...) instead of long UUIDs.

**Changes:**
1.  **TaskManager**:
    *   `add_task` now calculates the next available integer ID.
    *   `get_task_by_id` now prioritizes exact matches to resolve ambiguity between short IDs (e.g., distinguishing "1" from "10").
2.  **Tests**: Added `tests/integration/test_sequential_ids.py` to verify sequential generation and ID resolution.

**Note**: This change applies to *newly created* tasks. Existing tasks with UUIDs will remain but can be managed alongside new ones.
