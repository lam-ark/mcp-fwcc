---
id: "cc_slot_mechanics:HorizontalCascadeModule:methods:getNewSymbols"
title: "HorizontalCascadeModule.getNewSymbols Method"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "methods", "getNewSymbols"]
---

# 📖 `HorizontalCascadeModule.getNewSymbols()`

---

## 1. Method Signature & Overview

```typescript
getNewSymbols(col: number): void
```

- **Primary Role**: Implements getNewSymbols within the HorizontalCascadeModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected getNewSymbols(col: number): void {
		const listIndex = this.getConfig().SYMBOL_INDEXES;
		const totalCols = this.tableConfig.format.length;
		const rightPosition = this.tableConfig.positions[0][totalCols - 1];
		const listOldSymbols = this.listTraceWay[col].filter((symbol) => !symbol.startsWith('-1'));
		const startIndex = listOldSymbols.length;
        
		for (let i = listIndex[col].length - 1; i >= startIndex; i--) {
			const symbolValue = this.matrix[col][i];
			const { code, size } = this.mapSymbolData(symbolValue);
            
			const symbol = this.createNewSymbol(col, i, code, size);
			if (symbol) {
				const position = this.tableConfig.positions[0][i];
				symbol.setPosition(new cc.Vec2(rightPosition.x + (size + i - startIndex) * this.tableConfig.cellSize.x, position.y));

				const droppedPosition = this.calculatePosition(position.x, position.y);
				symbol["droppedPosition"] = droppedPosition;

				this.listSymbols[col][i] = symbol;                
				this.listNewSymbols.push(symbol);
			}
		}
	}
```
