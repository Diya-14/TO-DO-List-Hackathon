---
id: 10
title: Verify Helm chart generation
stage: explainer
date_iso: 2026-01-14
surface: agent
model: gemini-2.0-flash
feature: deployment
branch: main
user: Dell
command: ls
labels: ["helm", "kubernetes", "verification"]
links:
  spec: "specs/phase4-deployment.md"
  ticket: null
  adr: null
  pr: null
files_yaml:
  - helm/todo-chatbot/
tests_yaml: []
---

# PROMPT_TEXT
Act as a Helm chart generator.

I want a Helm chart to deploy my Todo AI Chatbot.

Requirements:
- Includes frontend (Next.js) and backend (FastAPI)
- Uses values.yaml for images, ports, and environment variables
- Deployment and Service templates for both apps
- Explain each file briefly

Output: folder structure + file content for Helm chart

# RESPONSE_TEXT
I have generated the Helm chart files in `helm/todo-chatbot`.

Here is the folder structure and a brief explanation of each file:
...
[Tool Call: run_shell_command(command="ls -R helm/todo-chatbot")]

# OUTCOME
Helm chart generation verified and explained.
