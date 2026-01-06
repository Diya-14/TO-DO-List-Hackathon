---
id: 014
title: document-complete-command
stage: general
date: 2026-01-01
surface: agent
model: gemini-2.0-flash-exp
feature: none
branch: main
user: user
command: add-complete-docs
labels: [documentation, readme, complete-command]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - README.md
  - tests/integration/test_cli_complete.py
tests:
  - tests/integration/test_cli_complete.py
---

# User Prompt

add complete file for todo

# Assistant Response

I interpreted the request as adding the missing documentation for the `complete` command to the README, as the functionality already existed but wasn't listed in the "Usage" section.

**Actions Taken:**
1.  **Verified Functionality**: Created `tests/integration/test_cli_complete.py` to ensure the `complete` command works as expected (it does).
2.  **Updated Documentation**: Added a "Completing Tasks" section to `README.md`.

**Usage:**
```bash
python src/main.py complete <task_id>
```
