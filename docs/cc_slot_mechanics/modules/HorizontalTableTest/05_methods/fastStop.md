---
id: "cc_slot_mechanics:HorizontalTableTest:methods:fastStop"
title: "HorizontalTableTest.fastStop Method Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalTableTest", "horizontal_table_test", "cc_slot_mechanics", "methods", "fastStop"]
---

# 📖 `HorizontalTableTest.fastStop()`

---

## 1. Method Signature

```typescript
fastStop(): void
```

- **Scope**: `HorizontalTableTest`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
fastStop(): void {
		this.table.fastStop();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
