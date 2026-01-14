---
id: 7
title: Create frontend service manifest
stage: implement
date_iso: 2026-01-14
surface: agent
model: gemini-2.0-flash
feature: deployment
branch: main
user: Dell
command: write_file
labels: ["kubernetes", "service", "frontend"]
links:
  spec: "specs/phase4-deployment.md"
  ticket: null
  adr: null
  pr: null
files_yaml:
  - k8s/frontend-service.yaml
tests_yaml: []
---

# PROMPT_TEXT
Create file:

k8s/frontend-service.yaml

# RESPONSE_TEXT
I will create a Kubernetes Service manifest for the Next.js frontend, exposing it on port 80 and mapping it to the container's port 3000 using a LoadBalancer type for external access.

[Tool Call: write_file(file_path="k8s/frontend-service.yaml", ...)]

# OUTCOME
Frontend service manifest created.
