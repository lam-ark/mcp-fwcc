---
id: "cc_slot_mechanics:NudgeSceneTest:methods:startSpin"
title: "NudgeSceneTest.startSpin Method"
category: "cc_slot_mechanics"
tags: ["NudgeSceneTest", "nudge_scene_test", "cc_slot_mechanics", "methods", "startSpin"]
---

# 📖 `NudgeSceneTest.startSpin()`

---

## 1. Method Signature & Overview

```typescript
startSpin(): void
```

- **Primary Role**: Implements startSpin within the NudgeSceneTest mechanics lifecycle.

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
