---
id: "cc_slot_mechanics:SlotCellTableModule:methods:stopSpin"
title: "SlotCellTableModule.stopSpin Method"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "methods", "stopSpin"]
---

# 📖 `SlotCellTableModule.stopSpin()`

---

## 1. Method Signature & Overview

```typescript
stopSpin(matrix?: string[][]): Promise<void>
```

- **Primary Role**: Implements stopSpin within the SlotCellTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopSpin(matrix?: string[][]): Promise<void> {
		this._matrix = matrix || this._slotTableData.getMatrix();

		this._lastMatrix = [...this._matrix];
		this.state = TableSpinState.SHOWING_RESULT;

		for (let col = 0; col < this.TOTAL_COLS; col++) {
			const totalRows = this.config.TABLE_FORMAT[col];
			for (let row = 0; row < totalRows; row++) {
				const reelComponent = this.reelList[col][row];
				const symbolData = this._matrix[col][row];
				reelComponent.showResult([symbolData], this.reelStop.bind(this), this.reelPreStop.bind(this));
			}
		}

		return new Promise((resolve) => {
			this._callbackStop = resolve;
		});
	}
```
