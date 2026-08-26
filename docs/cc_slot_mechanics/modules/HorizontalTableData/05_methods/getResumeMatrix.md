---
id: "cc_slot_mechanics:HorizontalTableData:methods:getResumeMatrix"
title: "HorizontalTableData.getResumeMatrix Method"
category: "cc_slot_mechanics"
tags: ["HorizontalTableData", "horizontal_table_data", "cc_slot_mechanics", "methods", "getResumeMatrix"]
---

# 📖 `HorizontalTableData.getResumeMatrix()`

---

## 1. Method Signature & Overview

```typescript
getResumeMatrix(gameMode?: number): string[][]
```

- **Primary Role**: Implements getResumeMatrix within the HorizontalTableData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getResumeMatrix(gameMode?: number): string[][] {
		const gameModeData = this.dataStore.getGameModeData(gameMode || this.gameMode);
		let rawMatrix = gameModeData.matrix || this.getRawResumeMatrix();
		if (!rawMatrix) {
			return [];
		}
		this.dataStore.setGameModeDataMap("matrix", rawMatrix);
		const horizontalSymbolIndexes = this.config.HORIZONTAL_SYMBOL_INDEXES;
		const horizontalMatrix = rawMatrix.filter((_symbolValue, symbolIndex) => horizontalSymbolIndexes.indexOf(symbolIndex) !== -1);
		return [[...horizontalMatrix]];
	}
```
