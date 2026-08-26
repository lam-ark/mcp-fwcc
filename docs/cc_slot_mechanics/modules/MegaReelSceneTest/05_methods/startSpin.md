---
id: "cc_slot_mechanics:MegaReelSceneTest:methods:startSpin"
title: "MegaReelSceneTest.startSpin Method"
category: "cc_slot_mechanics"
tags: ["MegaReelSceneTest", "mega_reel_scene_test", "cc_slot_mechanics", "methods", "startSpin"]
---

# 📖 `MegaReelSceneTest.startSpin()`

---

## 1. Method Signature & Overview

```typescript
startSpin(): void
```

- **Primary Role**: Implements startSpin within the MegaReelSceneTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
startSpin(): void {
		this.table.startSpin();
		this.scheduleOnce(() => {
			this.stopWithRandomMatrix();
		}, 0.3);
	}
```
