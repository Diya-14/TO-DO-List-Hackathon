# Feature Specification: Update Todo

**Feature Branch**: `002-update-todo`  
**Created**: 2025-12-30  
**Status**: Draft  
**Input**: User description: "uptade todo"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Update Task Title and Details (Priority: P1)

As a user, I want to edit an existing task's title or other properties using natural language so that I can quickly correct mistakes or update my plans.

**Why this priority**: Correcting information is a core part of task management.

**Independent Test**: Can be tested by creating a task, running the update command with a new description, and verifying the task reflects the changes.

**Acceptance Scenarios**:

1. **Given** a task with ID "abc" and title "Buy milk", **When** I run `todo update abc "Buy milk and eggs"`, **Then** the task title is updated to "Buy milk and eggs".
2. **Given** a task with ID "abc" and priority "medium", **When** I run `todo update abc "high priority"`, **Then** the task title remains "Buy milk" but priority is updated to "high".

---

### User Story 2 - Update Task via CLI Options (Priority: P2)

As a user, I want to update specific task fields using explicit CLI flags so that I have precise control over the modifications.

**Why this priority**: Provides a non-ambiguous way to update tasks when NLP might be overkill or imprecise.

**Independent Test**: Can be tested by running `todo update <ID> --priority low` and checking the result.

**Acceptance Scenarios**:

1. **Given** a task with ID "abc", **When** I run `todo update abc --priority low`, **Then** the task priority becomes "low".
2. **Given** a task with ID "abc", **When** I run `todo update abc --due "2026-01-01"`, **Then** the task due date is updated.

---

### User Story 3 - Error Handling for Missing Tasks (Priority: P3)

As a user, I want to receive a clear error message if I try to update a task that doesn't exist so that I know why the command failed.

**Why this priority**: Prevents user confusion when typing incorrect IDs.

**Independent Test**: Run `todo update non-existent-id "new title"` and verify error output.

**Acceptance Scenarios**:

1. **Given** no task with ID "999", **When** I run `todo update 999 "new title"`, **Then** the system displays "Task 999 not found".

### Edge Cases

- What happens when the user provides an empty string for the update? (System should notify that no changes were provided or maintain current values)
- How does the system handle conflicting NLP and CLI flags? (CLI flags should override NLP parsing results)

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST allow users to identify a task for update using its full UUID or the 8-character short ID.
- **FR-002**: System MUST notify the user and abort the update if a short ID matches multiple tasks.
- **FR-003**: System MUST support natural language parsing for the update text, consistent with the `add` command.
- **FR-003**: System MUST provide explicit CLI flags for `--title`, `--priority`, and `--due` to allow targeted updates.
- **FR-004**: System MUST preserve existing task values for fields that are not included in the update.
- **FR-005**: System MUST validate that the updated task still meets all model constraints (e.g., non-empty title).

### Key Entities *(include if feature involves data)*

- **Task**: The existing entity to be modified. Key attributes: `id`, `title`, `priority`, `due_date`, `status`.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can update a task's title in under 10 seconds.
- **SC-002**: 100% of valid update commands result in immediate persistence to the JSON storage.
- **SC-003**: The system accurately identifies the correct task using short IDs in 100% of non-ambiguous cases.
- **SC-004**: NLP parsing accuracy for updates matches or exceeds the accuracy of the `add` command.