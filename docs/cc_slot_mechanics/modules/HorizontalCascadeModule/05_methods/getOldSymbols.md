---
id: "cc_slot_mechanics:HorizontalCascadeModule:methods:getOldSymbols"
title: "HorizontalCascadeModule.getOldSymbols Method"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "methods", "getOldSymbols"]
---

# 📖 `HorizontalCascadeModule.getOldSymbols()`

---

## 1. Method Signature & Overview

```typescript
getOldSymbols(col: number): void
```

- **Primary Role**: Implements getOldSymbols within the HorizontalCascadeModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected getOldSymbols(col: number): void {
		const listOldSymbols = this.listTraceWay[col].filter((symbol) => !symbol.startsWith('-1'));
		if (listOldSymbols.length < this.listTraceWay[0].length) {
			const listIndex = this.getConfig().SYMBOL_INDEXES;

			for (let i = 0; i < listOldSymbols.length; i++) {
				let index = i;
				let symbol = this.listSymbols[0][index];
				while (!symbol && index < listIndex[0].length) {
					index++;
					symbol = this.listSymbols[0][index];
				}

				if (!symbol || index == i) {
					continue;
				}

				this.swapSymbol(0, i, index);
				SlotSymbolModule.getModuleComponent(symbol).setIndex(listIndex[0][i]);

				const posX = symbol.position.x - (index - i) * this.tableConfig.cellSize.x;
				const droppedPosition = this.calculatePosition(posX, symbol.position.y);
            
				symbol["droppedPosition"] = droppedPosition;
				this.listDroppedSymbols.push(symbol);
			}
		}    
	}
```
