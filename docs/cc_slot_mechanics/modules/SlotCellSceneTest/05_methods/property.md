---
id: "cc_slot_mechanics:SlotCellSceneTest:methods:property"
title: "SlotCellSceneTest.property Method Implementation"
category: "cc_slot_mechanics"
tags: ["SlotCellSceneTest", "slot_cell_scene_test", "cc_slot_mechanics", "methods", "property"]
---

# 📖 `SlotCellSceneTest.property()`

---

## 1. Method Signature

```typescript
property(SlotCellTableModule) table: SlotCellTableModule = null; start(): void
```

- **Scope**: `SlotCellSceneTest`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
property(SlotCellTableModule)
    table: SlotCellTableModule = null;
    
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
