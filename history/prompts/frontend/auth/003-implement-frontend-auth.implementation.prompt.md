---
id: "003"
title: "Implement Frontend Authentication"
stage: "implementation"
date: "2026-01-03"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "frontend-auth"
branch: "main"
user: "user"
command: "create-auth-frontend"
labels:
  - "frontend"
  - "auth"
  - "login"
  - "signup"
  - "context"
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "frontend/src/lib/api.ts"
  - "frontend/src/context/AuthContext.tsx"
  - "frontend/src/app/layout.tsx"
  - "frontend/src/app/login/page.tsx"
  - "frontend/src/app/signup/page.tsx"
tests:
  - "Manual verification: Navigate to /login, Sign up, Login, Redirect to /"
---

# User Request
"now craete my authinication means login and signup page before starting this todo user must first signup or login then use todo spp"

# Context & Plan
The user requested the addition of authentication pages (Login/Signup) and the enforcement of login before accessing the main application.
1.  **Architecture**:
    -   `AuthContext`: Handles global state (isAuthenticated, token storage) and route protection.
    -   `api.ts`: Helper for making authenticated requests and handling 401s.
2.  **Pages**:
    -   Login: Form interacting with `POST /api/v1/auth/login`.
    -   Signup: Form interacting with `POST /api/v1/auth/signup`.
3.  **UX**:
    -   Matches the "HackDo" dark/neon aesthetic.
    -   Includes loading states and error handling.

# Implementation Details
1.  **Context**: Created `AuthContext.tsx` to wrap the app. It checks for a token on mount and redirects unauthenticated users to `/login`.
2.  **API**: `fetchWithAuth` wrapper ensures the JWT is sent with requests.
3.  **Layout**: Wrapped `RootLayout` with `AuthProvider`.
4.  **Login Page**: Implemented proper `FormData` submission for OAuth2 compatibility.
5.  **Signup Page**: Implemented JSON submission for user creation.

# Outcome
Frontend now has a complete authentication flow. Unauthenticated users are blocked from the dashboard.

# Next Steps
-   Update the Dashboard (`page.tsx`) to fetch *real* tasks from the API using `fetchWithAuth` instead of mock data.
