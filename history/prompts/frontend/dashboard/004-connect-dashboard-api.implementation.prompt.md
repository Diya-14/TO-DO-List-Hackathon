---
id: "004"
title: "Connect Dashboard to Backend API"
stage: "implementation"
date: "2026-01-03"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "frontend-dashboard"
branch: "main"
user: "user"
command: "update-dashboard"
labels:
  - "frontend"
  - "dashboard"
  - "api-integration"
  - "crud"
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "frontend/src/components/TaskForm.tsx"
  - "frontend/src/app/page.tsx"
tests:
  - "Manual verification: Create a task, see it appear in the grid, filter tasks."
---

# User Request
"yes sure" (Response to: "Would you like me to update the dashboard to fetch real data from your database?")

# Context & Plan
The user confirmed they want the dashboard to connect to the real backend API.
1.  **TaskForm**: Created a reusable modal component for creating tasks.
2.  **Dashboard Integration**: Updated `page.tsx` to:
    -   Fetch tasks on mount using `fetchWithAuth`.
    -   Display loading states.
    -   Render real data in `TaskCard`s.
    -   Handle task creation via the `TaskForm` modal.
    -   Calculate real stats (Total/Pending/Done) based on fetched data.

# Implementation Details
1.  **Components**:
    -   `TaskForm.tsx`: Clean modal with fields for Title, Description, Priority, Due Date, and Tags.
2.  **Page Logic**:
    -   `useEffect` loads tasks from `/tasks/`.
    -   `handleCreateTask` POSTs new task data to `/tasks/` and refreshes the list.
    -   Added simple client-side filtering (All/Pending/Completed).

# Outcome
The dashboard is now fully functional and connected to the backend. Users can create and view their real tasks.

# Next Steps
-   Implement "Edit" and "Delete" functionality on the Task Cards.
-   Add "Update Status" actions (e.g., mark as done).
