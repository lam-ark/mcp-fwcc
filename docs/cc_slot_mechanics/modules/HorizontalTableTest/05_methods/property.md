---
id: "cc_slot_mechanics:HorizontalTableTest:methods:property"
title: "HorizontalTableTest.property Method Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalTableTest", "horizontal_table_test", "cc_slot_mechanics", "methods", "property"]
---

# 📖 `HorizontalTableTest.property()`

---

## 1. Method Signature

```typescript
property(HorizontalTableModule) table: HorizontalTableModule = null; start(): void
```

- **Scope**: `HorizontalTableTest`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
property(HorizontalTableModule)
    table: HorizontalTableModule = null;

    start(): void {
        this.table.initTable();
    }

    startSpin(): void {
		this.table.startSpin();
		this.scheduleOnce(() => {
			this.stopWithRandomMatrix();
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
