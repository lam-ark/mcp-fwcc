---
id: "cc_slot_mechanics:HorizontalCascadeSceneTest:methods:property"
title: "HorizontalCascadeSceneTest.property Method Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeSceneTest", "horizontal_cascade_scene_test", "cc_slot_mechanics", "methods", "property"]
---

# 📖 `HorizontalCascadeSceneTest.property()`

---

## 1. Method Signature

```typescript
property(HorizontalTableModule) table: HorizontalTableModule = null; @property(HorizontalCascadeModule) cascadeModule: HorizontalCascadeModule = null; start(): void
```

- **Scope**: `HorizontalCascadeSceneTest`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
property(HorizontalTableModule)
    table: HorizontalTableModule = null;
    @property(HorizontalCascadeModule)
    cascadeModule: HorizontalCascadeModule = null;
    
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
