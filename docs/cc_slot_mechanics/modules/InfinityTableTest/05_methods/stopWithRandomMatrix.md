---
id: "cc_slot_mechanics:InfinityTableTest:methods:stopWithRandomMatrix"
title: "InfinityTableTest.stopWithRandomMatrix Method Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "methods", "stopWithRandomMatrix"]
---

# 📖 `InfinityTableTest.stopWithRandomMatrix()`

---

## 1. Method Signature

```typescript
stopWithRandomMatrix(): void
```

- **Scope**: `InfinityTableTest`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
stopWithRandomMatrix(): void {
        const slotData = this.table.getComponent(InfinityTableData);
        slotData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5].map(String);
		this.table.stopSpin();
        
        this.scheduleOnce(() => {
            // fake respin
            this.table.startRespin(null);
			this.stopRespin1();
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
