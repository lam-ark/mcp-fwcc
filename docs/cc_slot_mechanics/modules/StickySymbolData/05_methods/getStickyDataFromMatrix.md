---
id: "cc_slot_mechanics:StickySymbolData:methods:getStickyDataFromMatrix"
title: "StickySymbolData.getStickyDataFromMatrix Method"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "methods", "getStickyDataFromMatrix"]
---

# 📖 `StickySymbolData.getStickyDataFromMatrix()`

---

## 1. Method Signature & Overview

```typescript
getStickyDataFromMatrix(): number[]
```

- **Primary Role**: Implements getStickyDataFromMatrix within the StickySymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getStickyDataFromMatrix(): number[] {
		const matrix = this.getMatrix();
		const flatMatrix = matrix.reduce((acc, row) => acc.concat(row), [] as string[]);
		flatMatrix.forEach((symbol, index) => {
			if (this.config.LIST_SYMBOL_FORCE_STICKY.indexOf(symbol) !== -1 && this.stickyIndexes.indexOf(index) === -1) {
				this.stickyIndexes.push(index);
			}
		});
		return Array.from(this.stickyIndexes);
	}
```
