---
id: "cc_slot_mechanics:HorizontalCascadeData:methods:getMatrix"
title: "HorizontalCascadeData.getMatrix Method"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeData", "horizontal_cascade_data", "cc_slot_mechanics", "methods", "getMatrix"]
---

# 📖 `HorizontalCascadeData.getMatrix()`

---

## 1. Method Signature & Overview

```typescript
getMatrix(): string[][]
```

- **Primary Role**: Implements getMatrix within the HorizontalCascadeData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getMatrix(): string[][] {
		let matrix = [];
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				matrix = this["normalGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
			case GAME_MODE_ENUM.FREE_GAME:
				matrix = this["freeGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
		}
		return eno.SlotUtils.convertSlotMatrix(matrix, this.config.CASCADE_TABLE_CONFIG.format);
	}
```
