---
id: "cc_slot_mechanics:HorizontalCascadeSceneTest:methods:startSpin"
title: "HorizontalCascadeSceneTest.startSpin Method"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeSceneTest", "horizontal_cascade_scene_test", "cc_slot_mechanics", "methods", "startSpin"]
---

# 📖 `HorizontalCascadeSceneTest.startSpin()`

---

## 1. Method Signature & Overview

```typescript
startSpin(): void
```

- **Primary Role**: Implements startSpin within the HorizontalCascadeSceneTest mechanics lifecycle.

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
