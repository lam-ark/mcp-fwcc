---
id: "cc_slot_mechanics:HorizontalCascadeModule:methods:updateSymbolList"
title: "HorizontalCascadeModule.updateSymbolList Method"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "methods", "updateSymbolList"]
---

# 📖 `HorizontalCascadeModule.updateSymbolList()`

---

## 1. Method Signature & Overview

```typescript
updateSymbolList(): void
```

- **Primary Role**: Implements updateSymbolList within the HorizontalCascadeModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected updateSymbolList(): void {
		const listIndex = this.getConfig().SYMBOL_INDEXES;

		let col = 0;
		let index = 0;
		for (let j = 0; j < this.matrix[0].length; j++) {
			const symbolValue = this.matrix[0][j];
			const { size } = this.mapSymbolData(symbolValue);
			col = col + size - 1;
			index = listIndex[0][j];
			const symbol = this.symbolManager.getSymbolByIndex(index, SymbolOwnerType.CASCADE_SYMBOL);
			const position = this.tableConfig.positions[0][j];
			if (symbol) {
				this.listSymbols[0][col] = symbol;
                
				symbol.setParent(this.container);
				symbol.setPosition(position);
			}
			col++;
		}
	}
```
