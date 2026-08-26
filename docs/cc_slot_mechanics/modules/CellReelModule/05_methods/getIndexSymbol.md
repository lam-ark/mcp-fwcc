---
id: "cc_slot_mechanics:CellReelModule:methods:getIndexSymbol"
title: "CellReelModule.getIndexSymbol Method"
category: "cc_slot_mechanics"
tags: ["CellReelModule", "cell_reel_module", "cc_slot_mechanics", "methods", "getIndexSymbol"]
---

# 📖 `CellReelModule.getIndexSymbol()`

---

## 1. Method Signature & Overview

```typescript
getIndexSymbol(indexData: number): number
```

- **Primary Role**: Implements getIndexSymbol within the CellReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getIndexSymbol(indexData: number): number {
		const indexConfig = this.config.SYMBOL_INDEXES[this.reelIndex];
		const symbolsIndex = [indexConfig[this.reelRow]];

		const bufferTop = Array(this.config.BUFFER_TOP).fill(-1);
		const bufferBot = Array(this.config.BUFFER_BOT).fill(-1);
		symbolsIndex.push(...bufferTop);
		symbolsIndex.unshift(...bufferBot);

		return symbolsIndex[indexData];
	}
```
