# Tasks: Smart Todo CLI

**Feature Branch**: `001-smart-todo-cli`
**Status**: Pending

## Phase 1: Setup
**Goal**: Initialize project structure and dependencies.

- [x] T001 Create project directory structure (src/cli, src/core, src/models, src/skills, tests) in `.`
- [x] T002 Create `requirements.txt` with typer, rich, pydantic, dateparser, pytest, scikit-learn in `requirements.txt`
- [x] T003 Create `README.md` with project documentation in `README.md`
- [x] T004 Create `src/main.py` entry point skeleton in `src/main.py`
- [x] T005 [P] Create `tests/conftest.py` for test configuration in `tests/conftest.py`
- [x] T006 [P] Create `src/__init__.py` and sub-package inits in `src/`

## Phase 2: Foundational
**Goal**: Implement core data models and persistence layer.

- [x] T007 Create Task and Project Pydantic models in `src/models/task.py`
- [x] T008 Implement JSON Persistence Manager (load/save) in `src/core/persistence.py`
- [x] T009 [P] Create configuration manager (default priority, paths) in `src/core/config.py`
- [x] T010 Create unit tests for Persistence Manager in `tests/unit/test_persistence.py`
- [x] T011 Create unit tests for Task Model validation in `tests/unit/test_models.py`

## Phase 3: User Story 1 - Add Task with NL
**Goal**: Enable users to add tasks via natural language using Hybrid NLP.
**Story**: [US1] Add Task with Natural Language

- [x] T012 [P] [US1] Implement DateParser logic in `src/skills/nlp.py`
- [x] T013 [P] [US1] Implement Regex/Heuristic parsers for Priority/Category in `src/skills/nlp.py`
- [x] T014 [US1] Create unit tests for NLP Skill in `tests/unit/test_nlp.py`
- [x] T015 [US1] Implement `add` command in `src/cli/commands.py`
- [x] T016 [US1] Wire up `main.py` to `add` command in `src/main.py`
- [x] T017 [US1] Create integration test for `add` command in `tests/integration/test_cli_add.py`

## Phase 4: User Story 2 - List and Filter
**Goal**: View and manage tasks with filters.
**Story**: [US2] List and Filter Tasks

- [x] T018 [US2] Implement Task Manager service (list, filter logic) in `src/core/task_manager.py`
- [x] T019 [US2] Implement `complete` command logic in `src/cli/commands.py`
- [x] T020 [US2] Implement `list` command with Rich table formatting in `src/cli/commands.py`
- [x] T021 [P] [US2] Add filtering logic (status, priority) to TaskManager in `src/core/task_manager.py`
- [x] T022 [US2] Create integration tests for `list` and `complete` in `tests/integration/test_cli_list.py`

## Phase 5: User Story 3 - Organize/Cluster
**Goal**: AI-driven task organization using TF-IDF.
**Story**: [US3] Organize/Cluster Tasks

- [x] T023 [P] [US3] Implement TF-IDF clustering logic in `src/skills/clustering.py`
- [x] T024 [US3] Create unit tests for Clustering Skill in `tests/unit/test_clustering.py`
- [x] T025 [US3] Implement `organize` command in `src/cli/commands.py`
- [x] T026 [US3] Create integration test for `organize` command in `tests/integration/test_cli_organize.py`

## Phase 6: Polish & Cross-Cutting
**Goal**: Final cleanups and non-functional requirements.

- [x] T027 Refactor error handling (user-friendly messages) in `src/cli/main.py`
- [x] T028 Audit "Cold Start" performance (<500ms) in `tests/performance/test_startup.py`
- [x] T029 Add comprehensive docstrings to all modules in `src/`
- [x] T030 Final Manual QA pass in `qa_checklist.md`

## Dependencies

- Phase 2 depends on Phase 1
- Phase 3 depends on Phase 2 (Models/Persistence)
- Phase 4 depends on Phase 2 (Models/Persistence)
- Phase 5 depends on Phase 4 (List logic needed for organizing/displaying)

## Parallel Execution Examples

- **NLP & Clustering**: `src/skills/nlp.py` (T012) and `src/skills/clustering.py` (T023) can be built in parallel.
- **Tests**: Unit tests (T010, T014, T024) can be written alongside implementation.
- **Config**: Configuration manager (T009) is independent of core logic initially.
