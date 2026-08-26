---
id: "cc_slot_mechanics:SlotTableMegaModule:methods:onLoadExtend"
title: "SlotTableMegaModule.onLoadExtend Method Implementation"
category: "cc_slot_mechanics"
tags: ["SlotTableMegaModule", "slot_table_mega_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `SlotTableMegaModule.onLoadExtend()`

---

## 1. Method Signature

```typescript
onLoadExtend(): void
```

- **Scope**: `SlotTableMegaModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
onLoadExtend(): void {
        super.onLoadExtend();
        this._slotTableData = this.getComponent(MegaReelData);
    }

    stopSpin(matrix?: string[][], _forceStop?: boolean): Promise<void> {
		this._matrix = matrix || this._slotTableData.getMatrix();
        
        this.megaData = this._slotTableData.formatMegaData();
        this.hasMulti = this.megaData.filter(data => data.length > 0).length > 2;
        
		this._lastMatrix = [...this._matrix];
		this.onChangeState(TableSpinState.SHOWING_RESULT);

		this.reels.forEach((reelComponent, index) => {
            const reelData = {
                symbols: [...this._matrix[index]],
                megaData: this.megaData[index],
                hasMulti: this.hasMulti
            };
			reelComponent.showResult(reelData, this.onReelStop.bind(this), this.onReelPreStop.bind(this));

		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
