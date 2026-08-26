---
id: "cc_slot_mechanics:NudgeSceneTest:methods:stopWithRandomMatrix"
title: "NudgeSceneTest.stopWithRandomMatrix Method"
category: "cc_slot_mechanics"
tags: ["NudgeSceneTest", "nudge_scene_test", "cc_slot_mechanics", "methods", "stopWithRandomMatrix"]
---

# 📖 `NudgeSceneTest.stopWithRandomMatrix()`

---

## 1. Method Signature & Overview

```typescript
stopWithRandomMatrix(): void
```

- **Primary Role**: Implements stopWithRandomMatrix within the NudgeSceneTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopWithRandomMatrix(): void {
        const slotData = this.table.getComponent(SlotTableData);
        slotData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5].map(String);
        slotData["nud"] = ["1:6:-1"];
		this.table.stopSpin();

        this.scheduleOnce(() => {
            (this.table as NudgeTableModule).prepareNudge();
        }, 4);
	}
```
