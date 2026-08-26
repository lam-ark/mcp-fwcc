---
id: "cc_slot_mechanics:CellReelModule:methods:resumeReel"
title: "CellReelModule.resumeReel Method"
category: "cc_slot_mechanics"
tags: ["CellReelModule", "cell_reel_module", "cc_slot_mechanics", "methods", "resumeReel"]
---

# 📖 `CellReelModule.resumeReel()`

---

## 1. Method Signature & Overview

```typescript
resumeReel(symbols: string[]): void
```

- **Primary Role**: Implements resumeReel within the CellReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
resumeReel(symbols: string[]): void {
		this.updateReelResult(symbols);

		this.data.forEach((symbolValue: string, index: number) => {
			if (symbolValue) {
				const revertIndex = this.data.length - index - 1;
				const { symbolCode: code, symbolSize: size } = this.mapSymbolData(symbolValue);
				const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
				SlotSymbolModule.getModuleComponent(symbol).setIndex(this.getIndexSymbol(revertIndex));
				const position = this.initPositionByType(index, size);
				symbol.setPosition(position.x, position.y);
				eno.setOpacity(symbol, 255);
				this.listSymbols.push(symbol);
			}
		});

		this.symbolManager.updateSymbolSiblingIndex(this.listSymbols);
	}
```
