---
id: "cc_slot_mechanics:HorizontalCascadeSceneTest:methods:stopWithRandomMatrix"
title: "HorizontalCascadeSceneTest.stopWithRandomMatrix Method"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeSceneTest", "horizontal_cascade_scene_test", "cc_slot_mechanics", "methods", "stopWithRandomMatrix"]
---

# 📖 `HorizontalCascadeSceneTest.stopWithRandomMatrix()`

---

## 1. Method Signature & Overview

```typescript
stopWithRandomMatrix(): void
```

- **Primary Role**: Implements stopWithRandomMatrix within the HorizontalCascadeSceneTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopWithRandomMatrix(): void {
        const slotData = this.table.getComponent(HorizontalTableData);
        slotData["matrix"] = [2,3,3,2,3].map(String);
		this.table.stopSpin();
        
        this.scheduleOnce(() => {
            // fake respin
            const cascadeData = this.cascadeModule.getComponent(HorizontalCascadeData);
            cascadeData["matrix"] = slotData["matrix"];
            cascadeData["traceWay"] = [2];
            this.cascadeModule.startRespin(null, null);
			this.stopRespin();
		}, 2);
	}
```
