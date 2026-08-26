---
id: "cc_slot_mechanics:CascadeWildGenerationSceneTest:methods:startSpin"
title: "CascadeWildGenerationSceneTest.startSpin Method"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationSceneTest", "cascade_wild_generation_scene_test", "cc_slot_mechanics", "methods", "startSpin"]
---

# 📖 `CascadeWildGenerationSceneTest.startSpin()`

---

## 1. Method Signature & Overview

```typescript
startSpin(): void
```

- **Primary Role**: Implements startSpin within the CascadeWildGenerationSceneTest mechanics lifecycle.

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
