# Implementation Plan: Smart Todo CLI

**Branch**: `001-smart-todo-cli` | **Date**: 2025-12-30 | **Spec**: [specs/001-smart-todo-cli/spec.md](../spec.md)
**Input**: Feature specification from `specs/001-smart-todo-cli/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a CLI-based Task Management system that supports Natural Language Processing (NLP) for adding tasks and AI-driven clustering for organization. Key features include offline-only operation, file-based persistence (JSON), and strict adherence to agentic architecture (Main Agent -> Sub-Agents -> Skills).

## Technical Context

**Language/Version**: Python 3.11 (Assumed based on "CLI" and "AI" context, but NEEDS CONFIRMATION)
**Primary Dependencies**: `typer` or `click` (CLI), `pydantic` (Data Models), `pytest` (Testing).
**Storage**: Local JSON file (`~/.todo-cli/data.json`).
**Testing**: `pytest` with high coverage.
**Target Platform**: Cross-platform (Windows/Linux/macOS) via Python.
**Project Type**: CLI Application.
**Performance Goals**: <500ms startup, <2s parsing latency.
**Constraints**: Offline ONLY, No DBs, No External APIs.
**Scale/Scope**: Personal use (thousands of tasks max).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec Source of Truth**: Spec exists and is referenced.
- [x] **Agents vs Prompts**: Architecture plan uses Skills for NLP.
- [x] **Quality Gates**: Testing is mandatory.
- [x] **Deterministic**: NLP/Clustering must be deterministic (seeded/ruled-based).
- [x] **Constraint - CLI Only**: Yes.
- [x] **Constraint - File Persistence**: Yes (JSON).
- [x] **Constraint - Offline**: Yes (No APIs).
- [ ] **Constraint - Frameworks**: Verification needed (No Web Frameworks).

## Project Structure

### Documentation (this feature)

```text
specs/001-smart-todo-cli/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
src/
├── main.py              # Entry point
├── cli/                 # CLI Command definitions (Typer/Click)
├── core/                # Core logic (Task Manager, Persistence)
├── models/              # Pydantic models
└── skills/              # AI Skills (NLP Parser, Clusterer)

tests/
├── unit/                # Unit tests for logic/skills
└── integration/         # CLI integration tests
```

**Structure Decision**: Single Python Project structure.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | | |