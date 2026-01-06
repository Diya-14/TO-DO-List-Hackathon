---
id: "002"
title: "Implement FastAPI Backend with SQLModel"
stage: "implementation"
date: "2026-01-03"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "backend"
branch: "main"
user: "user"
command: "create-backend"
labels:
  - "backend"
  - "fastapi"
  - "sqlmodel"
  - "neon-db"
  - "auth"
links:
  spec: "specs/001-smart-todo-cli/spec.md"
  ticket: null
  adr: null
  pr: null
files:
  - "backend/requirements.txt"
  - "backend/.env.template"
  - "backend/app/core/config.py"
  - "backend/app/core/db.py"
  - "backend/app/core/security.py"
  - "backend/app/models/user.py"
  - "backend/app/models/task.py"
  - "backend/app/api/deps.py"
  - "backend/app/api/auth.py"
  - "backend/app/api/tasks.py"
  - "backend/app/main.py"
tests:
  - "Manual verification instructions provided"
---

# User Request
"now craete my backend according to my agents requirement also i add all my dtabse in neon db and remeber use sql model"

# Context & Plan
The user requested the creation of the backend using FastAPI, SQLModel, and Neon DB, in accordance with the agent definitions.
1.  **Agent Persona**: Adopted the `fastapi-backend-implementer` persona.
2.  **Tech Stack**: FastAPI, SQLModel, Pydantic, Python-Jose (JWT), Passlib (Bcrypt), Neon DB (PostgreSQL).
3.  **Architecture**:
    -   Modular structure: `app/core`, `app/models`, `app/api`.
    -   Auth: OAuth2PasswordBearer with JWT access tokens.
    -   Database: SQLModel engine connected to Neon DB via `DATABASE_URL`.
    -   Security: `user_id` derived from JWT claims; explicit ownership checks on all Task operations.

# Implementation Details
1.  **Dependencies**: Created `backend/requirements.txt` with all necessary packages.
2.  **Configuration**: 
    -   `backend/.env.template` for sensitive vars.
    -   `backend/app/core/config.py` using `pydantic-settings`.
3.  **Database**: `backend/app/core/db.py` sets up the SQLModel engine.
4.  **Security**: 
    -   `backend/app/core/security.py` handles password hashing and token generation.
    -   `backend/app/api/deps.py` provides `get_current_user` dependency.
5.  **Models**:
    -   `User`: Standard auth fields + relation to Tasks.
    -   `Task`: Fields from spec (title, status, priority) + `user_id` FK.
6.  **API**:
    -   `auth.py`: Signup and Login endpoints.
    -   `tasks.py`: CRUD endpoints with strict `current_user` scoping.
7.  **Main**: Wired up CORS, Routers, and Lifespan in `backend/app/main.py`.

# Outcome
Successfully scaffolded the complete backend codebase. It is ready to run once dependencies are installed and `.env` is configured.

# Next Steps
-   User needs to create a Neon DB project and set `DATABASE_URL` in `backend/.env`.
-   Run `pip install -r backend/requirements.txt`.
-   Run server: `fastapi dev backend/app/main.py`.
