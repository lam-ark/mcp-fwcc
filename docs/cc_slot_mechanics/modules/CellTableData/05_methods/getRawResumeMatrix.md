---
id: "cc_slot_mechanics:CellTableData:methods:getRawResumeMatrix"
title: "CellTableData.getRawResumeMatrix Method"
category: "cc_slot_mechanics"
tags: ["CellTableData", "cell_table_data", "cc_slot_mechanics", "methods", "getRawResumeMatrix"]
---

# 📖 `CellTableData.getRawResumeMatrix()`

---

## 1. Method Signature & Overview

```typescript
getRawResumeMatrix(): string[]
```

- **Primary Role**: Implements getRawResumeMatrix within the CellTableData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getRawResumeMatrix(): string[] {
		let mx = [];
		switch (this.gameMode) {
			case GAME_MODE_ENUM.FREE_GAME:
				mx = this["freeGameMatrix"] || this["matrix"];
				break;
			case GAME_MODE_ENUM.NORMAL_GAME:
				mx = this["normalGameMatrix"] || this["matrix"];
				break;
		}

		return mx;
	}
```
