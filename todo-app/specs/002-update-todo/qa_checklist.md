# QA Checklist: Update Todo

## [US1] Update Task Title and Details
- [ ] Create a task, update its title via NLP: `update <ID> "New Title"`
- [ ] Create a task, update its priority via NLP: `update <ID> "high priority"`
- [ ] Create a task, update both title and priority via NLP: `update <ID> "New Title urgent"`

## [US2] Update Task via CLI Options
- [ ] Update title via flag: `update <ID> --title "Flag Title"`
- [ ] Update priority via flag: `update <ID> --priority low`
- [ ] Update due date via flag: `update <ID> --due "2026-12-31"`
- [ ] Verify flag precedence: `update <ID> "high priority" --priority low` (Should be LOW)

## [US3] Error Handling
- [ ] Update non-existent task: `update 999 "text"` (Should show "Task 999 not found")
- [ ] Update with ambiguous ID: `update 1 "text"` where 10 and 11 exist (Should show "Multiple tasks match")

## Interactive Mode
- [ ] Choose option 3, enter ID, enter changes via NLP
- [ ] Choose option 3, enter ID, skip NLP, enter Title/Priority/Due explicitly
- [ ] Choose option 3, enter ID, provide both NLP and explicit values, verify precedence

## Persistence & State
- [ ] Verify changes persist after app restart
- [ ] Verify non-updated fields remain unchanged
- [ ] Verify `id` and `created_at` are NOT modified
