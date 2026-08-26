---
id: "cc_slot_mechanics:SlotCellTableModule:methods:startSpin"
title: "SlotCellTableModule.startSpin Method"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "methods", "startSpin"]
---

# 📖 `SlotCellTableModule.startSpin()`

---

## 1. Method Signature & Overview

```typescript
startSpin(): void
```

- **Primary Role**: Implements startSpin within the SlotCellTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
startSpin(): void {
		if (this.state === TableSpinState.READY || this.state === TableSpinState.STOPPED) {
			this.state = TableSpinState.START;
			this.table.active = true;

			this.currentMode = this.gameSettings.isTurboActive ? this.config.MODES.TURBO : this.config.MODES.NORMAL;
			this.totalReelSpin = 0;
			this.totalReelStop = 0;

			for (let col = 0; col < this.TOTAL_COLS; col++) {
				const totalRows = this.config.TABLE_FORMAT[col];
				for (let row = 0; row < totalRows; row++) {
					const reelComponent = this.reelList[col][row];
					this.totalReelSpin++;
					reelComponent.runReelSpin(this.currentMode);
				}
			}
		}
	}
```
