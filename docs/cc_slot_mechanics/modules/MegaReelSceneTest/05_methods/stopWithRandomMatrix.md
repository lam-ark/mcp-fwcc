---
id: "cc_slot_mechanics:MegaReelSceneTest:methods:stopWithRandomMatrix"
title: "MegaReelSceneTest.stopWithRandomMatrix Method Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelSceneTest", "mega_reel_scene_test", "cc_slot_mechanics", "methods", "stopWithRandomMatrix"]
---

# 📖 `MegaReelSceneTest.stopWithRandomMatrix()`

---

## 1. Method Signature

```typescript
stopWithRandomMatrix(): void
```

- **Scope**: `MegaReelSceneTest`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
stopWithRandomMatrix(): void {
        const slotData = this.table.getComponent(SlotTableData);
        slotData["matrix"] = [2,3,3,2,3].map(String);
		this.table.stopSpin();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
