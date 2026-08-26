---
id: "cc_slot_mechanics:SlotCellTableModule:methods:showBeautyMatrix"
title: "SlotCellTableModule.showBeautyMatrix Method"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "methods", "showBeautyMatrix"]
---

# 📖 `SlotCellTableModule.showBeautyMatrix()`

---

## 1. Method Signature & Overview

```typescript
showBeautyMatrix(): void
```

- **Primary Role**: Implements showBeautyMatrix within the SlotCellTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
showBeautyMatrix(): void {
		if (!this.config.BEAUTY_MATRIX || !this.config.BEAUTY_MATRIX.length) {
			return;
		}
		let beautyMatrix = [...this.config.getRandomBeautyMatrix()];

		this.syncTable(beautyMatrix);
		for (let col = 0; col < this.TOTAL_COLS; col++) {
			const totalRows = this.config.TABLE_FORMAT[col];
			for (let row = 0; row < totalRows; row++) {
				const reelComponent = this.reelList[col][row];
				reelComponent.hideFakeSymbols();
				const symbols = reelComponent.getRealSymbols();
				symbols.forEach(symbol => {
					const symbolComp = SlotSymbolModule.getModuleComponent(symbol);
					symbolComp.playSymbolIntro(symbolComp.symbolCode);
				});
			}
		}
	}
```
