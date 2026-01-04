---
id: 1
title: Fix localhost connection refused error
stage: general
date: 2026-01-04
surface: agent
model: gemini-2.0-flash
feature: none
branch: main
user: Dell
command: none
labels: ["bug-fix", "windows", "powershell", "fastapi", "nextjs"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml: |
  - start-app.ps1
  - backend/app/main.py
tests_yaml: |
  - Manual port check using Get-NetTCPConnection
  - Backend ping test using Invoke-RestMethod
---

# Prompt
i make this website but when i run this local host so this will not run Hmmm… can't reach this page
localhost refused to connect.
Try:

Search the web for localhost
Checking the connection
Checking the proxy and the firewall
ERR_CONNECTION_REFUSED so solve this problem

# Response
I've resolved the "localhost refused to connect" error by fixing two main issues:

1. **Fixed Startup Script (`start-app.ps1`)**: Updated the script to use `cmd /c npm run dev`. Previously, it was trying to run `npm` as a direct executable, which fails on Windows because `npm` is a script.
2. **Fixed Backend Crash (`backend/app/main.py`)**: Removed emojis from the error logging logic. These emojis were causing a `UnicodeEncodeError`, which crashed the backend server whenever it encountered a database connection issue.
3. **Added Diagnostics**: The startup script now verifies that ports 8000 (Backend) and 3000 (Frontend) are actually listening before it finishes.

You can now run the application by executing `./start-app.ps1`.
