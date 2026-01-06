---
description: Run static analysis and style checks to enforce code quality standards.
owner: QA agent
tags: 
  - linting
  - style
  - pep8
  - typing
  - ruff
  - mypy
---

## User Input

```text
$ARGUMENTS
```

## Purpose

To enforce Python coding standards (PEP 8), type safety, and project-specific conventions through static analysis tools. This catches syntax errors, unused imports, and potential bugs without running the code.

## When to Use

-   **Pre-Commit**: Before committing any changes to git.
-   **Code Review**: When reviewing generated code.
-   **Refactoring**: To clean up code structure.

## Trigger Phase

-   **Refactor Phase**: The primary tool for the "Refactor" step in TDD.
-   **Review**: Continuous quality monitoring.

## Execution Steps

### 1. Tool Selection
-   Determine available tools: `ruff`, `flake8`, `black`, `mypy`.
-   Prefer `ruff` for speed and `mypy` for typing.

### 2. Execute Linting
-   Run `ruff check .` (or equivalent).
-   Run `mypy .` to check type consistency.

### 3. Analyze Findings
-   **Errors**: Syntax errors or undefined variables (Must Fix).
-   **Warnings**: Unused variables, line length issues, import sorting (Should Fix).
-   **Typing**: Type mismatch errors (Must Fix).

### 4. Remediation
-   If auto-fix is available (e.g., `ruff check --fix`), suggest running it.
-   List outstanding issues that require manual intervention.
