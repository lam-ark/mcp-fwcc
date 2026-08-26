---
id: "cc_slot_mechanics:InfinityTableTest:methods:property"
title: "InfinityTableTest.property Method Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "methods", "property"]
---

# 📖 `InfinityTableTest.property()`

---

## 1. Method Signature

```typescript
property(InfinityTableModule) table: InfinityTableModule = null; start(): void
```

- **Scope**: `InfinityTableTest`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
property(InfinityTableModule)
    table: InfinityTableModule = null;
    
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
