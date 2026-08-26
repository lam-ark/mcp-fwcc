---
id: "cc_slot_mechanics:InfinityTableModule:methods:stopRespin"
title: "InfinityTableModule.stopRespin Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "stopRespin"]
---

# 📖 `InfinityTableModule.stopRespin()`

---

## 1. Method Signature & Overview

```typescript
stopRespin(matrix: string[][]): Promise<void>
```

- **Primary Role**: Implements stopRespin within the InfinityTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
public stopRespin(matrix: string[][]): Promise<void> {
        this._matrix = matrix || this._slotTableData.getMatrix();
        const index: number = this._matrix.length - 1;
        const reelData = [...this._matrix[index]];
        
        const lastReelIndex = this.extendedReels.length - 1;
		(this.extendedReels[lastReelIndex] as InfinityReelModule).showExtendedResult(reelData, this.onExtendedReelStop.bind(this), this.onReelPreStop.bind(this));
        this.respinState = InfinityTableSpinState.CAN_F2R;

        this.scheduleOnce(() => {
            this.respinState = InfinityTableSpinState.STOP_RESPIN;
            this._tableStopCB && this._tableStopCB();
            this._tableStopCB = null;
        }, (this.config as InfinityTableConfig).EXTENDE_REEL_DELAY_STOP);

        return new Promise((resolve) => {
			this._tableStopCB = resolve;
		});
    }
```
