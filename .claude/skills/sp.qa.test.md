---
description: Execute the project's test suite with coverage reporting.
owner: QA agent
tags: 
  - testing
  - pytest
  - coverage
  - verification
  - phase-1
---

## User Input

```text
$ARGUMENTS
```

## Purpose

To execute unit and integration tests using `pytest` and generate a coverage report. This ensures that code changes do not break existing functionality and that new features are adequately tested.

## When to Use

-   **After Implementation**: Immediately after writing code for a feature or bugfix.
-   **Before Refactoring**: To establish a baseline.
-   **After Refactoring**: To ensure no regressions were introduced.
-   **CI/CD Simulation**: To verify the build health manually.

## Trigger Phase

-   **Green Phase**: Part of the TDD "Green" step.
-   **Verification**: Final check before marking a task as complete.

## Execution Steps

### 1. Environment Check
-   Ensure the virtual environment is active.
-   Verify `pytest` and `pytest-cov` are installed.

### 2. Run Tests
-   Execute: `pytest --cov=. --cov-report=term-missing` (or project specific command).
-   If arguments are provided (e.g., specific file or marker), pass them to pytest.

### 3. Analyze Results
-   **Pass/Fail**: Check for any failed tests.
-   **Coverage**: Check if coverage meets the threshold (e.g., >80%).
-   **Slowest Tests**: Identify any tests taking an abnormal amount of time.

### 4. Reporting
-   Summarize the test run: "X passed, Y failed, Z skipped".
-   List any coverage gaps in modified files.
-   If failures exist, provide the error trace and suggest a fix.
