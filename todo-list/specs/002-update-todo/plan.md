# Implementation Plan: Update Todo

**Branch**: `002-update-todo` | **Date**: 2025-12-30 | **Spec**: [specs/002-update-todo/spec.md](spec.md)
**Input**: Feature specification from `specs/002-update-todo/spec.md`

## Summary

Extend the Smart Todo CLI to support updating existing tasks. This involves identifying tasks by full or short ID, parsing update text (natural language) for field changes, and supporting explicit CLI flags for targeted updates. The implementation will follow the existing agentic architecture, utilizing the `TaskManager` and `NLParser`.

## Technical Context

**Language/Version**: Python 3.11+
**Primary Dependencies**: `typer` (CLI), `pydantic` (Models), `dateparser` (NLP), `rich` (UI).
**Storage**: Local JSON file (shared with existing tasks).
**Testing**: `pytest` (Unit & Integration).
**Target Platform**: Cross-platform (Windows/Linux/macOS).
**Project Type**: CLI Application Extension.
**Performance Goals**: <500ms startup for the update command.
**Constraints**: Offline ONLY, No DBs, No External APIs.
**Scale/Scope**: Updating a single task per command.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec Source of Truth**: Spec exists and is referenced.
- [x] **Agents vs Prompts**: Uses existing `NLParser` skill for update parsing.
- [x] **Quality Gates**: Testing is mandatory (new integration tests for update).
- [x] **Deterministic**: NLP parsing for updates must follow established rule-based heuristics.
- [x] **Constraint - CLI Only**: Yes.
- [x] **Constraint - File Persistence**: Yes (JSON).
- [x] **Constraint - Offline**: Yes.
- [x] **Constraint - Frameworks**: No new web frameworks added.

## Project Structure

### Documentation (this feature)

```text
specs/002-update-todo/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command)
```

### Source Code (repository root)

Existing structure will be utilized:
```text
src/
├── cli/
│   └── commands.py      # Add 'update' command
├── core/
│   └── task_manager.py  # Add 'update_task' method
└── skills/
    └── nlp.py           # Reuse/Refine NLParser for updates
```

**Structure Decision**: Integrated into existing single Python project structure.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | | |