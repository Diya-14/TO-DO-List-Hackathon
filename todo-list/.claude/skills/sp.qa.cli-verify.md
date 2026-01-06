---
description: Verify the CLI application's functionality by simulating user interactions.
owner: QA agent
tags: 
  - integration
  - cli
  - manual-test
  - user-flow
  - phase-1
---

## User Input

```text
$ARGUMENTS
```

## Purpose

To validate the application's behavior from a user's perspective by running the CLI commands against the specification. This ensures the "happy path" works as expected and error messages are user-friendly.

## When to Use

-   **Feature Completion**: When a user story is marked as "implemented".
-   **Release Prep**: Before finalizing a version.
-   **Regression Testing**: Ensuring core flows (add -> list -> complete) still work.

## Trigger Phase

-   **Verification**: Final acceptance testing.

## Execution Steps

### 1. Setup
-   Clean or backup the data file (e.g., `todo.json`) to ensure a known state.
-   Locate the entry point (e.g., `python main.py` or `python -m todo`).

### 2. Scenario Execution
-   **Help Command**: Run `--help` to verify documentation.
-   **Add Task**: Add a task and verify success message.
-   **List Tasks**: List tasks and verify the new task appears correctly.
-   **State Change**: Mark task as complete/progress and verify status update.
-   **Edge Cases**: Input invalid commands or arguments and check error handling (no crashes).

### 3. Verification
-   Compare command output against `spec.md` examples.
-   Verify persistence: Restart the app (or check the JSON file) to ensure data was saved.

### 4. Report
-   Document the scenarios run.
-   Flag any discrepancies in output format, color usage, or logic.
-   Confirm the UX is smooth (no stack traces visible to user).
