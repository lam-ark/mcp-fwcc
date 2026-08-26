---
id: "cc_slot_mechanics:HorizontalTableConfig:methods:SYMBOL_INDEXES"
title: "HorizontalTableConfig.SYMBOL_INDEXES Method Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalTableConfig", "horizontal_table_config", "cc_slot_mechanics", "methods", "SYMBOL_INDEXES"]
---

# 📖 `HorizontalTableConfig.SYMBOL_INDEXES()`

---

## 1. Method Signature

```typescript
SYMBOL_INDEXES(): number[][]
```

- **Scope**: `HorizontalTableConfig`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
SYMBOL_INDEXES(): number[][] {
		return [[0, 1, 2, 3, 4]];
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
