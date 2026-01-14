---
id: 2
title: Generate Production Dockerfiles
stage: implement
date_iso: 2026-01-14
surface: agent
model: gemini-2.0-flash
feature: deployment
branch: main
user: Dell
command: write_file
labels: ["docker", "deployment", "python", "nextjs"]
links:
  spec: "specs/phase4-deployment.md"
  ticket: null
  adr: null
  pr: null
files_yaml:
  - todo-app/backend/Dockerfile
  - todo-app/Dockerfile
  - todo-app/.dockerignore
  - todo-app/next.config.ts
tests_yaml: []
---

# PROMPT_TEXT
Act as a Docker AI Agent.

I have:
- A FastAPI backend with OpenAI Agents SDK, SQLModel, and PostgreSQL
- A Next.js frontend (Chat UI)

Generate:
1) A production Dockerfile for the FastAPI backend (Python 3.11) running on port 8000
2) A production Dockerfile for the Next.js frontend running on port 3000

Keep it simple and explain each Dockerfile in easy words.

# RESPONSE_TEXT
I have generated:
1.  `todo-app/backend/Dockerfile`
2.  `todo-app/Dockerfile`
3.  `todo-app/.dockerignore`
4.  Updated `todo-app/next.config.ts` to support standalone mode.

[Tool Calls: write_file x3, replace x1]

# OUTCOME
Dockerfiles created and configuration updated for production builds.
