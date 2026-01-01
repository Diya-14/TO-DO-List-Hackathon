# Tasks: Update Todo

**Feature Branch**: `002-update-todo`
**Status**: Pending

## Phase 1: Setup
**Goal**: Prepare the environment for the update feature.

- [x] T001 Verify existing test suite passes in `.`
- [x] T002 Create integration test skeleton for update command in `tests/integration/test_cli_update.py`

## Phase 2: Foundational
**Goal**: Implement core task retrieval and update logic in the TaskManager.

- [x] T003 Implement `get_task_by_id` with short ID support and ambiguity detection in `src/core/task_manager.py`
- [x] T004 Implement `update_task` method that merges changes into an existing Task in `src/core/task_manager.py`
- [x] T005 [P] Create unit tests for TaskManager update logic in `tests/unit/test_task_manager.py`

## Phase 3: User Story 1 - Update Task with NL (Priority: P1)
**Goal**: Enable updating task properties via natural language.
**Story**: [US1] Update Task Title and Details

- [ ] T006 [US1] Extend `NLParser` to support partial parsing for updates in `src/skills/nlp.py`
- [ ] T007 [US1] Implement `update` command basic structure in `src/cli/commands.py`
- [ ] T008 [US1] Integrate `NLParser` into `update` command in `src/cli/commands.py`
- [ ] T009 [US1] Create integration tests for NLP-based updates in `tests/integration/test_cli_update.py`

## Phase 4: User Story 2 - Update Task via CLI Options (Priority: P2)
**Goal**: Provide explicit CLI flags for targeted task updates.
**Story**: [US2] Update Task via CLI Options

- [ ] T010 [US2] Add `--title`, `--priority`, and `--due` options to `update` command in `src/cli/commands.py`
- [ ] T011 [US2] Implement CLI flag precedence over NLP results in `src/cli/commands.py`
- [ ] T012 [US2] Create integration tests for CLI flag updates in `tests/integration/test_cli_update.py`

## Phase 5: User Story 3 - Error Handling (Priority: P3)
**Goal**: Ensure robust error reporting for missing or ambiguous tasks.
**Story**: [US3] Error Handling for Missing Tasks

- [ ] T013 [US3] Implement "Task not found" error reporting in `src/cli/commands.py`
- [ ] T014 [US3] Implement "Ambiguous short ID" error reporting in `src/cli/commands.py`
- [ ] T015 [US3] Create integration tests for error scenarios in `tests/integration/test_cli_update.py`

## Phase 6: Polish & Cross-Cutting
**Goal**: Finalize documentation and performance.

- [ ] T016 Audit update command performance (<500ms) in `tests/performance/test_startup.py`
- [ ] T017 Update docstrings and documentation for the new command in `src/`
- [ ] T018 Final manual QA pass for Update Todo in `qa_checklist.md`

## Dependencies

- Phase 2 depends on Phase 1
- Phase 3 depends on Phase 2
- Phase 4 depends on Phase 3
- Phase 5 depends on Phase 2
- Phase 6 depends on all previous phases

## Parallel Execution Examples

- **Tests & Logic**: Unit tests (T005) can be developed alongside TaskManager logic (T003, T004).
- **NLP & CLI**: NLP parser refinement (T006) and CLI flag implementation (T010) are relatively independent once the command structure (T007) is established.
