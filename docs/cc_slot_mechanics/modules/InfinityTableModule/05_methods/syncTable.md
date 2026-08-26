---
id: "cc_slot_mechanics:InfinityTableModule:methods:syncTable"
title: "InfinityTableModule.syncTable Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "syncTable"]
---

# 📖 `InfinityTableModule.syncTable()`

---

## 1. Method Signature & Overview

```typescript
syncTable(matrix?: string[][], gameMode?: number): void
```

- **Primary Role**: Implements syncTable within the InfinityTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
syncTable(matrix?: string[][], gameMode?: number): void {
        super.syncTable(matrix, gameMode);

        this.currentMode = this.gameSettings.isTurboActive ? this.config.MODES.TURBO : this.config.MODES.NORMAL;
        //TODO: need to check the resume matrix to add more reels
        const mx = this._slotTableData.dataStore.playSession.matrix;
        if (!mx) {
            return;
        }
        
        const totalRows = this.config.TABLE_FORMAT[0];
        const totalExtendedReels = Math.floor(mx.length / totalRows) - this.TOTAL_COLS;
        
        if (totalExtendedReels > 0) {
            const tablePosition = this.table.position.clone();
            this.table.setPosition(new cc.Vec2(tablePosition.x - this.SYMBOL_WIDTH * totalExtendedReels, tablePosition.y));
            
            for (let i = 0; i < totalExtendedReels; i++) {
                this.currentReelExtended++;
                this.createExtendedReel();

                const reelComponent = this.extendedReels[this.extendedReels.length - 1];
                reelComponent.node.active = true;

                const reelData = [...mx[this.TOTAL_COLS + i]];
                reelComponent.resumeReel(reelData);
            }
        }
	}
```
