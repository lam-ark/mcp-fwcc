---
id: "cc_slot_mechanics:SlotCellTableModule:methods:syncTable"
title: "SlotCellTableModule.syncTable Method"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "methods", "syncTable"]
---

# 📖 `SlotCellTableModule.syncTable()`

---

## 1. Method Signature & Overview

```typescript
syncTable(matrix?: string[][], gameMode?: number): void
```

- **Primary Role**: Implements syncTable within the SlotCellTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
syncTable(matrix?: string[][], gameMode?: number): void {
		this._matrix = matrix || this._slotTableData.getResumeMatrix(gameMode);

		if (!this._matrix || !this._matrix.length) {
			return;
		}
		this.removeAllSymbols();
		this.table.active = true;
		this._lastMatrix = [...this._matrix];
		for (let col = 0; col < this.TOTAL_COLS; col++) {
			const totalRows = this.config.TABLE_FORMAT[col];
			for (let row = 0; row < totalRows; row++) {
				const reelComponent = this.reelList[col][row];
				reelComponent.clearSymbols();
				reelComponent.resumeReel([this._matrix[col][row]]);
			}
		}
	}
```
