---
id: "cc_slot_mechanics:HorizontalCascadeModule:methods:removeDroppedSymbols"
title: "HorizontalCascadeModule.removeDroppedSymbols Method"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "methods", "removeDroppedSymbols"]
---

# 📖 `HorizontalCascadeModule.removeDroppedSymbols()`

---

## 1. Method Signature & Overview

```typescript
removeDroppedSymbols(): void
```

- **Primary Role**: Implements removeDroppedSymbols within the HorizontalCascadeModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected removeDroppedSymbols(): void {
		for (let i = 0; i < this.listDropColumns.length; i++) {
			const col = this.listDropColumns[i];
			let row = this.listSymbols[i].length - 1;
			for (let j = this.listTraceWay[col].length - 1; j >= 0; j--) {
				const value = this.listTraceWay[col][j];
				const { code, size } = this.mapSymbolData(value);
				if (code == "-1") {
					this.removeSymbolAt(col, row);
				}
				row = row - size;
			}
		}
	}
```
