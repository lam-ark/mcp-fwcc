---
id: "cc_slot_mechanics:SlotCellTableModule:methods:initListReel"
title: "SlotCellTableModule.initListReel Method"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "methods", "initListReel"]
---

# 📖 `SlotCellTableModule.initListReel()`

---

## 1. Method Signature & Overview

```typescript
initListReel(): void
```

- **Primary Role**: Implements initListReel within the SlotCellTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
initListReel(): void {
		this.START_X = -(this.TOTAL_COLS / 2 - 0.5) * this.SYMBOL_WIDTH;
		for (let col = 0; col < this.TOTAL_COLS; col++) {
			this.reelList[col] = [];
			const totalRows = this.config.TABLE_FORMAT[col];
			for (let row = 0; row < totalRows; row++) {
				const reelNode = new Node(`Reel_${col}_${row}`);
				const maskRow = this.listMaskRow[row];
				reelNode.setParent(maskRow);

				const x = this.START_X + col * this.SYMBOL_WIDTH;
				reelNode.setPosition(new cc.Vec2(x, 0));

				const reelComponent = reelNode.addComponent(CellReelModule);
				reelComponent.initReel({ reelIndex: col, config: this.config, pool: this.symbolManager, reelRow: row });
				reelComponent.hideFakeSymbols();

				this.reelList[col][row] = reelComponent;
			}
		}
	}
```
