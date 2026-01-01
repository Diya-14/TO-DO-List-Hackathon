---
id: 013
title: fix-module-not-found
stage: general
date: 2026-01-01
surface: agent
model: gemini-2.0-flash-exp
feature: none
branch: main
user: user
command: fix-import-path
labels: [fix, bug, python-path]
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

Traceback (most recent call last):
  File "C:\Users\Dell\OneDrive\Documents\GitHub\TO-DO-List-Hackathon\src\main.py", line 3, in <module>
    from src.cli.commands import app as cli_app
ModuleNotFoundError: No module named 'src' this will not work what i do?

# Assistant Response

I encountered a `ModuleNotFoundError` because the `src` directory was not in the Python path when running `src/main.py` directly.

**Fix:**
I modified `src/main.py` to programmatically add the project root directory to `sys.path` before imports.

**Code Change in `src/main.py`:**
```python
import sys
import os
# Add project root to sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
```

**Verification:**
Ran `python src/main.py --help` successfully.
