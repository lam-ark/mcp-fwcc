---
id: "cc_slot_mechanics:RemovedSymbolModule:methods:removeSymbols"
title: "RemovedSymbolModule.removeSymbols Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "methods", "removeSymbols"]
---

# 📖 `RemovedSymbolModule.removeSymbols()`

---

## 1. Method Signature & Overview

```typescript
removeSymbols(): void
```

- **Primary Role**: Implements removeSymbols within the RemovedSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected removeSymbols(): void {
		for (let i = 0; i < this.transformMatrix.length; i++) {
			const col = this.transformMatrix[i].col;
			const row = this.transformMatrix[i].row;
			const r = this.convertRow(col, row);
			const symbol = this.listSymbols[col][r];
			if (symbol) {
				this.symbolManager.removeSymbol(symbol);
				this.listSymbols[col][r] = null;
			}
		}
	}
```
