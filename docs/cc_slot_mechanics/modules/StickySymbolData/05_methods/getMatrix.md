---
id: "cc_slot_mechanics:StickySymbolData:methods:getMatrix"
title: "StickySymbolData.getMatrix Method"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "methods", "getMatrix"]
---

# 📖 `StickySymbolData.getMatrix()`

---

## 1. Method Signature & Overview

```typescript
getMatrix(): string[][]
```

- **Primary Role**: Implements getMatrix within the StickySymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getMatrix(): string[][] {
		let rawMatrix = [];
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				rawMatrix = this["normalGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
			case GAME_MODE_ENUM.FREE_GAME:
				rawMatrix = this["freeGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
		}
		return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT);
	}
```
