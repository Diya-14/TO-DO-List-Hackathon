---
id: 017
title: enhance-interactive-add
stage: general
date: 2026-01-01
surface: agent
model: gemini-2.0-flash-exp
feature: none
branch: main
user: user
command: enhance-interactive-add
labels: [feature, cli, interactive, ux]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/cli/commands.py
  - src/main.py
tests: []
---

# User Prompt

if i choose add option so this give me option priority due date than add in a list

# Assistant Response

I have enhanced the "Add Task" flow in the interactive mode to be more guided.

**Changes:**
1.  **`src/cli/commands.py`**: Updated the `add` command to accept optional `priority` and `due` arguments, allowing manual overrides of NLP.
2.  **`src/main.py`**: Updated the interactive loop for option 1 ("Add Task") to ask three questions sequentially:
    *   "Enter Task Title"
    *   "Enter Priority" (defaults to medium)
    *   "Enter Due Date" (optional)

**Outcome:**
When selecting "Add Task" in the menu, the user is now guided through setting specific fields before the task is created.
