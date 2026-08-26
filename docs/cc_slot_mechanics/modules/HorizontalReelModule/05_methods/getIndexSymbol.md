---
id: "cc_slot_mechanics:HorizontalReelModule:methods:getIndexSymbol"
title: "HorizontalReelModule.getIndexSymbol Method"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "getIndexSymbol"]
---

# 📖 `HorizontalReelModule.getIndexSymbol()`

---

## 1. Method Signature & Overview

```typescript
getIndexSymbol(indexData: number): number
```

- **Primary Role**: Implements getIndexSymbol within the HorizontalReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getIndexSymbol(indexData: number): number {
		const symbolsIndex = [...this.config.SYMBOL_INDEXES[this.reelIndex]];

		const bufferTop = Array(this.config.BUFFER_TOP).fill(-1);
		const bufferBot = Array(this.config.BUFFER_BOT).fill(-1);
		symbolsIndex.push(...bufferTop);
		symbolsIndex.unshift(...bufferBot);

		return symbolsIndex[indexData];
	}
```
