---
id: "cc_slot_mechanics:HorizontalTableData:methods:getMatrix"
title: "HorizontalTableData.getMatrix Method"
category: "cc_slot_mechanics"
tags: ["HorizontalTableData", "horizontal_table_data", "cc_slot_mechanics", "methods", "getMatrix"]
---

# 📖 `HorizontalTableData.getMatrix()`

---

## 1. Method Signature & Overview

```typescript
getMatrix(): string[][]
```

- **Primary Role**: Implements getMatrix within the HorizontalTableData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getMatrix(): string[][] {
		let rawMatrix = this.getRawMatrix();
		if (!rawMatrix) {
			return [];
		}
		const horizontalSymbolIndexes = this.config.HORIZONTAL_SYMBOL_INDEXES;
		const horizontalMatrix = rawMatrix.filter((_symbolValue, symbolIndex) => horizontalSymbolIndexes.indexOf(symbolIndex) !== -1);
		return [[...horizontalMatrix]];
	}
```
