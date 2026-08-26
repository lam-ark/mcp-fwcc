---
id: "cc_slot_mechanics:InfinityTableModule:methods:createExtendedReel"
title: "InfinityTableModule.createExtendedReel Method Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "createExtendedReel"]
---

# 📖 `InfinityTableModule.createExtendedReel()`

---

## 1. Method Signature

```typescript
createExtendedReel(): void
```

- **Scope**: `InfinityTableModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
protected createExtendedReel(): void {
        const col = this.TOTAL_COLS - 1 + this.currentReelExtended;
		const reelNode = this.createReelNode(col);
		
        const reelComponent = reelNode.getComponent(InfinityReelModule);
		reelComponent.initReel({ reelIndex: col, config: this.config, pool: this.symbolManager });
        reelComponent.updateMode(this.currentMode);
		this.extendedReels.push(reelComponent);
        
        reelNode.active = false;

        this.extendTableFormat();
    }

    protected spinExtendedReel(): void {
		const index: number = this.extendedReels.length - 1;
        (this.extendedReels[index] as InfinityReelModule).runExtendedReelSpin();	
    }

    protected resetExtendedReels(): void {
        const config = this._slotTableData.getComponent(InfinityTableConfig);
        let hasChanged = false;
        while (this.extendedReels.length) {
            const extendedReel = this.extendedReels.pop();
            extendedReel.node.removeFromParent();
            extendedReel.node = null;

            // Reset config format
			config.TABLE_FORMAT.pop();
			config.RANDOM_SYMBOLS_CODE.pop();
			config.SYMBOL_INDEXES.pop();
            hasChanged = true;
        }

        if (hasChanged) {
            this.moduleEvent.emit('TABLE_FORMAT_CHANGED', {
                tableFormat: config.TABLE_FORMAT,
                symbolIndexes: config.SYMBOL_INDEXES,
            });
        }

        this.extendedReels = [];
        this.currentReelExtended = 0;
    }

    fastStop(): void {
        if (this.respinState === InfinityTableSpinState.CAN_F2R && this.currentReelExtended > 0) {
            this.extendedReels.forEach((reelComponent) => {
                reelComponent.fastStop();
            });
        }
		super.fastStop();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
