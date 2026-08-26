---
id: "cc_slot_mechanics:SlotCellSceneTest:methods:startSpin"
title: "SlotCellSceneTest.startSpin Method"
category: "cc_slot_mechanics"
tags: ["SlotCellSceneTest", "slot_cell_scene_test", "cc_slot_mechanics", "methods", "startSpin"]
---

# 📖 `SlotCellSceneTest.startSpin()`

---

## 1. Method Signature & Overview

```typescript
startSpin(): void
```

- **Primary Role**: Implements startSpin within the SlotCellSceneTest mechanics lifecycle.

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
