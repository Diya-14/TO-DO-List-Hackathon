---
id: 015
title: implement-interactive-mode
stage: general
date: 2026-01-01
surface: agent
model: gemini-2.0-flash-exp
feature: none
branch: main
user: user
command: implement-interactive-menu
labels: [feature, cli, interactive]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/main.py
tests: []
---

# User Prompt

one things was show error that not commands will run after write whole command commands run give all todo option and select comand with enter option

# Assistant Response

I understood the request as wanting an interactive menu system instead of requiring full CLI commands (e.g., just running `python src/main.py` should show options).

**Implementation:**
1.  Modified `src/main.py` to check for arguments.
2.  If no arguments are provided (`len(sys.argv) == 1`), it enters `interactive_mode()`.
3.  `interactive_mode()` displays a numbered menu (1-7) using `rich`.
4.  It uses `rich.prompt` to get user input and calls the corresponding functions from `src.cli.commands` programmatically.

**Usage:**
Run `python src/main.py` (without arguments) to see the menu.
