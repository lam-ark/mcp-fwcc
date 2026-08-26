---
id: "cc_slot_mechanics:InfinityTableModule:methods:registerEvents"
title: "InfinityTableModule.registerEvents Method Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "registerEvents"]
---

# 📖 `InfinityTableModule.registerEvents()`

---

## 1. Method Signature

```typescript
registerEvents(): void
```

- **Scope**: `InfinityTableModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
protected registerEvents(): void {
        super.registerEvents();
        if (this.moduleEvent) {
            this.moduleEvent.on("TABLE_START_RESPIN", this.startRespin, this);
		    this.moduleEvent.on("TABLE_STOP_RESPIN", this.stopRespin, this);
        }
    }

    //TODO: need to override method syncTable for state resume
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

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
