---
description: Audit code quality, standards compliance, and phase 1 constraints for todo app
owner: QA agent
tags: 
  - quality
  - audit
  - standards
  - phase-1
  - python
---

## User Input

```text
$ARGUMENTS
```

## Purpose

To systematically review the codebase against established quality standards, strict Phase 1 constraints, and Pythonic best practices. This ensures that the Todo application remains maintainable, performant, and aligned with the architectural vision defined in `plan.md` and the constitutional rules in `.specify/memory/constitution.md`.

## When to Use

-   **Pre-Merge**: Before finalizing a feature implementation or creating a pull request.
-   **Phase Transitions**: When moving from one development phase to another (e.g., verifying Phase 1 completion).
-   **Periodic Review**: To catch technical debt or standard drifts early in the development cycle.
-   **On Demand**: When the 'QA agent' is invoked to verify specific compliance requirements.

## Trigger Phase

-   **Refactor/Review Phase**: Typically executed after `sp.implement` and before `sp.git.commit_pr`.
-   **Verification**: Can be triggered manually during **Red/Green** cycles to ensure new code doesn't violate core constraints.

## Execution Steps

### 1. Context & Standards Loading
-   Load `plan.md` to understand Phase 1 constraints (e.g., no database, CLI only).
-   Load `spec.md` to verify functional compliance context.
-   Load project conventions from `GEMINI.md` and `CLAUDE.md`.

### 2. Static Analysis & Linting (Simulated or Executed)
-   **Linting**: Check for adherence to PEP 8 (Python) and project-specific styling.
-   **Typing**: Verify usage of type hints where appropriate.
-   **Imports**: Ensure no forbidden libraries are imported (e.g., heavy frameworks not in `plan.md`).

### 3. Constraint Verification (Phase 1 Specifics)
-   **Persistence Check**: Verify that data storage is strictly JSON/in-memory as per Phase 1 rules. Flag any SQL or binary file usage.
-   **Interface Check**: Ensure the application exposes only a CLI interface. Flag any GUI code (Tkinter, PyQt, etc.).
-   **Structure Check**: Confirm that file locations match the expected folder structure.

### 4. Code Quality Audit
-   **Docstrings**: Check for meaningful docstrings on public modules, classes, and functions.
-   **Complexity**: Identify overly complex functions that need breaking down.
-   **Hardcoding**: Look for hardcoded paths, magic numbers, or sensitive data.

### 5. Report Generation
-   Output a structured Markdown report.
-   **Sections**:
    -   **Summary**: Pass/Fail status for Phase 1 constraints.
    -   **Critical Issues**: Violations of the Constitution or Phase 1 constraints.
    -   **Warnings**: Code style issues, missing docstrings, or potential bugs.
    -   **Recommendations**: Actionable steps to resolve findings.
