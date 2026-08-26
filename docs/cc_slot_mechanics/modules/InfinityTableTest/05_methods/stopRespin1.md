---
id: "cc_slot_mechanics:InfinityTableTest:methods:stopRespin1"
title: "InfinityTableTest.stopRespin1 Method Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "methods", "stopRespin1"]
---

# 📖 `InfinityTableTest.stopRespin1()`

---

## 1. Method Signature

```typescript
stopRespin1(): void
```

- **Scope**: `InfinityTableTest`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
stopRespin1(): void {
        this.scheduleOnce(() => {
            const infinityData = this.table.getComponent(InfinityTableData);
            infinityData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5,2,3,4].map(String);
            this.table.stopRespin(null);

            this.startRespin2();
        }, 0.5);
    }

    startRespin2(): void {
        this.scheduleOnce(() => {
            this.table.startRespin(null);
            this.stopRespin2();
        }, 1.5);
    }

    stopRespin2(): void {
        this.scheduleOnce(() => {
            const infinityData = this.table.getComponent(InfinityTableData);
            infinityData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5,2,3,4,5,6,7].map(String);
            this.table.stopRespin(null);
        }, 0.5);
    }
	
	fastStop(): void {
		this.table.fastStop();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
