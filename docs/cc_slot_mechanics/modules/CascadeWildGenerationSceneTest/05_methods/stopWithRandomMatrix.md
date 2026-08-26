---
id: "cc_slot_mechanics:CascadeWildGenerationSceneTest:methods:stopWithRandomMatrix"
title: "CascadeWildGenerationSceneTest.stopWithRandomMatrix Method"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationSceneTest", "cascade_wild_generation_scene_test", "cc_slot_mechanics", "methods", "stopWithRandomMatrix"]
---

# 📖 `CascadeWildGenerationSceneTest.stopWithRandomMatrix()`

---

## 1. Method Signature & Overview

```typescript
stopWithRandomMatrix(): void
```

- **Primary Role**: Implements stopWithRandomMatrix within the CascadeWildGenerationSceneTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopWithRandomMatrix(): void {
        const slotData = this.table.getComponent(SlotTableData);
        slotData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5].map(String);
		this.table.stopSpin();
        
        this.scheduleOnce(() => {
            // fake respin
            const cascadeData = this.cascadeModule.getComponent(CascadeWildGenerationData);
            cascadeData["matrix"] = slotData["matrix"];
            cascadeData["traceWay"] = [1, 3, 7, 8];
            cascadeData["wildAppearPosition"] = "11:11";
            this.cascadeModule.startRespinHandler();
			this.stopRespin();
		}, 4);
	}
```
