---
id: "cc_slot_mechanics:CascadeWildGenerationSceneTest:methods:property"
title: "CascadeWildGenerationSceneTest.property Method Implementation"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationSceneTest", "cascade_wild_generation_scene_test", "cc_slot_mechanics", "methods", "property"]
---

# 📖 `CascadeWildGenerationSceneTest.property()`

---

## 1. Method Signature

```typescript
property(SlotTableModule) table: SlotTableModule = null; @property(CascadeWildGenerationModule) cascadeModule: CascadeWildGenerationModule = null; start(): void
```

- **Scope**: `CascadeWildGenerationSceneTest`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
property(SlotTableModule)
    table: SlotTableModule = null;
    @property(CascadeWildGenerationModule)
    cascadeModule: CascadeWildGenerationModule = null;
    
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
