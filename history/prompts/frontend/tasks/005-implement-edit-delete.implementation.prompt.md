---
id: "005"
title: "Implement Task Edit and Delete"
stage: "implementation"
date: "2026-01-03"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "frontend-tasks"
branch: "main"
user: "user"
command: "implement-edit-delete"
labels:
  - "frontend"
  - "tasks"
  - "crud"
  - "ui-ux"
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "frontend/src/components/TaskCard.tsx"
  - "frontend/src/components/TaskForm.tsx"
  - "frontend/src/app/page.tsx"
tests:
  - "Manual verification: Click Edit icon, update title, save. Click Delete icon, confirm, verify removal."
---

# User Request
"yes sure" (Response to: "Would you like me to implement the Delete and Edit features next...")

# Context & Plan
The user requested full CRUD capability (Edit/Delete).
1.  **TaskCard**: Updated to accept `onEdit`, `onDelete`, and `onStatusChange` handlers. Added buttons for these actions.
2.  **TaskForm**: Updated to handle `initialData` for "Edit Mode".
3.  **Page Logic**:
    -   Implemented `handleDeleteTask`: DELETE request + state update.
    -   Implemented `handleEditTask`: PATCH request + state update + modal management.
    -   Implemented `handleStatusChange`: Quick toggle for task completion directly from the card footer.

# Implementation Details
1.  **TaskCard**: Added Edit (pencil) and Delete (trash) icons that appear on hover. Added a status toggle button in the footer.
2.  **TaskForm**: Pre-fills fields when `initialData` is provided. Changes button text to "Save Changes".
3.  **Dashboard**:
    -   Manages `editingTask` state to know which task is being modified.
    -   Optimistic updates for status changes for a snappy feel.
    -   Confirmation dialog before deletion.

# Outcome
Users can now fully manage the lifecycle of their tasks: Create, Read, Update, and Delete.

# Next Steps
-   Refine error handling (toast notifications).
-   Add drag-and-drop reordering (if desired).
