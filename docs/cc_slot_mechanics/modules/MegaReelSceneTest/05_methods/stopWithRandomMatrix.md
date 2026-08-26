---
id: "cc_slot_mechanics:MegaReelSceneTest:methods:stopWithRandomMatrix"
title: "MegaReelSceneTest.stopWithRandomMatrix Method"
category: "cc_slot_mechanics"
tags: ["MegaReelSceneTest", "mega_reel_scene_test", "cc_slot_mechanics", "methods", "stopWithRandomMatrix"]
---

# 📖 `MegaReelSceneTest.stopWithRandomMatrix()`

---

## 1. Method Signature & Overview

```typescript
stopWithRandomMatrix(): void
```

- **Primary Role**: Implements stopWithRandomMatrix within the MegaReelSceneTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopWithRandomMatrix(): void {
        const slotData = this.table.getComponent(SlotTableData);
        slotData["matrix"] = [2,3,3,2,3].map(String);
		this.table.stopSpin();
	}
```
