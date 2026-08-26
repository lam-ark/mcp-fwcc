---
id: "cc_slot_mechanics:RemovedSymbolModule:methods:getSymbolIndex"
title: "RemovedSymbolModule.getSymbolIndex Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "methods", "getSymbolIndex"]
---

# 📖 `RemovedSymbolModule.getSymbolIndex()`

---

## 1. Method Signature & Overview

```typescript
getSymbolIndex(col: number, row: number): number
```

- **Primary Role**: Implements getSymbolIndex within the RemovedSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected getSymbolIndex(col: number, row: number): number {
		const listIndex = this.getConfig().SYMBOL_INDEXES;
		return listIndex[col][row];
	}
```
