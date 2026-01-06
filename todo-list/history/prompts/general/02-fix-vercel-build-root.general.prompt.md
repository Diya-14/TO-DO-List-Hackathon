---
id: 2
title: Fix Vercel build error (Root Directory)
stage: general
date: 2026-01-04
surface: agent
model: gemini-2.0-flash
feature: none
branch: main
user: Dell
command: none
labels: ["vercel", "deployment", "nextjs", "monorepo"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml: |
  - package.json
---

# Prompt
when i upload this project on vercel ... Error: No Next.js version detected. Make sure your package.json has "next" in either "dependencies" or "devDependencies". Also check your Root Directory setting matches the directory of your package.json file. so this show error what i do?

# Response
Vercel is looking at the root of your repository, but your Next.js project is inside the `frontend/` folder.

To fix this:
1. Go to **Vercel Project Settings**.
2. Set **Root Directory** to `frontend`.
3. I also added a root `package.json` that redirects `npm install` and `npm run build` to the `frontend` directory as a backup.
