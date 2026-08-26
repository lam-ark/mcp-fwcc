---
id: "cc_slot_mechanics:TumblingSceneTest:methods:stopWithRandomMatrix"
title: "TumblingSceneTest.stopWithRandomMatrix Method"
category: "cc_slot_mechanics"
tags: ["TumblingSceneTest", "tumbling_scene_test", "cc_slot_mechanics", "methods", "stopWithRandomMatrix"]
---

# 📖 `TumblingSceneTest.stopWithRandomMatrix()`

---

## 1. Method Signature & Overview

```typescript
stopWithRandomMatrix(): void
```

- **Primary Role**: Implements stopWithRandomMatrix within the TumblingSceneTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopWithRandomMatrix(): void {
        const slotData = this.table.getComponent(SlotTableData);
        slotData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5].map(String);
		this.table.stopSpin();
	}
```
