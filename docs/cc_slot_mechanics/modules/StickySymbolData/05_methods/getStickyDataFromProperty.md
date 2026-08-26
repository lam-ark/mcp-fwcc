---
id: "cc_slot_mechanics:StickySymbolData:methods:getStickyDataFromProperty"
title: "StickySymbolData.getStickyDataFromProperty Method"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "methods", "getStickyDataFromProperty"]
---

# 📖 `StickySymbolData.getStickyDataFromProperty()`

---

## 1. Method Signature & Overview

```typescript
getStickyDataFromProperty(): number[]
```

- **Primary Role**: Implements getStickyDataFromProperty within the StickySymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getStickyDataFromProperty(): number[] {
		const stickyData = this[this.customStickyProperty];
		if (!stickyData) {
			return [];
		}
		if (typeof stickyData == 'string') {
			const arr = stickyData.split(",");
			return arr.map(i => Number(i));
		}

		return stickyData;
	}
```
