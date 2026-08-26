---
id: "cc_slot_mechanics:InfinityReelModule:methods:getIndexSymbol"
title: "InfinityReelModule.getIndexSymbol Method"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "methods", "getIndexSymbol"]
---

# 📖 `InfinityReelModule.getIndexSymbol()`

---

## 1. Method Signature & Overview

```typescript
getIndexSymbol(indexData: number): number
```

- **Primary Role**: Implements getIndexSymbol within the InfinityReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getIndexSymbol(indexData: number): number {
		let symbolsIndex = [];
		if (this.reelIndex > this.DEFAULT_FORMAT.length - 1) {
			const totalRows = this.DEFAULT_FORMAT[0];
			symbolsIndex = this.config.SYMBOL_INDEXES[0].map(index => index + this.reelIndex * totalRows).reverse();
		} else {
			symbolsIndex = [...this.config.SYMBOL_INDEXES[this.reelIndex]].reverse();
		}

		const bufferTop = Array(this.config.BUFFER_TOP).fill(-1);
		const bufferBot = Array(this.config.BUFFER_BOT).fill(-1);
		symbolsIndex.push(...bufferTop);
		symbolsIndex.unshift(...bufferBot);

		return symbolsIndex[indexData];
	}
```
