---
id: "cc_slot_mechanics:StickySymbolData:methods:getStickyIndexes"
title: "StickySymbolData.getStickyIndexes Method"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "methods", "getStickyIndexes"]
---

# 📖 `StickySymbolData.getStickyIndexes()`

---

## 1. Method Signature & Overview

```typescript
getStickyIndexes(): number[]
```

- **Primary Role**: Implements getStickyIndexes within the StickySymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getStickyIndexes(): number[] {
		if (this.customStickyProperty) {
			return this.getStickyDataFromProperty();
		}
		return this.getStickyDataFromMatrix();
	}
```
