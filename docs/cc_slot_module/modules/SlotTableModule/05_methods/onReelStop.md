---
id: "cc_slot_module:SlotTableModule:method:onReelStop"
title: "SlotTableModule.onReelStop() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "onReelStop"]
---

# `SlotTableModule.onReelStop(reelIndex: number): void`

---

## 1. Method Signature
```typescript
protected onReelStop(reelIndex: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Calls virtual hook `this.onReelStopExtend(reelIndex)`.
2. Emits scoped module event:
   `this.moduleEvent.emit(TableModuleEvents.REEL_STOPPED, this.reelCount, this.reels[this.reelCount].getResultSymbols())`.
3. Increments stopped column counter: `this.reelCount++`.
4. Emits near-win event: `this.node.emit('REEL_STOP_NEARWIN', { reelCount: this.reelCount, context: this })`.
5. Checks if all columns finished: `if (this.reelCount >= this.reels.length)`:
   * Sets state: `this.onChangeState(TableSpinState.STOPPED)`.
   * Invokes and clears completion callback: `this._tableStopCB && this._tableStopCB(); this._tableStopCB = null;`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected onReelStop(reelIndex: number): void {
    this.onReelStopExtend(reelIndex);
    if (this.moduleEvent) {
        this.moduleEvent.emit(TableModuleEvents.REEL_STOPPED, this.reelCount, this.reels[this.reelCount].getResultSymbols());
    }
    this.reelCount++;
    this.node.emit('REEL_STOP_NEARWIN', { reelCount: this.reelCount, context: this });
    if (this.reelCount >= this.reels.length) {
        this.onChangeState(TableSpinState.STOPPED);
        this._tableStopCB && this._tableStopCB();
        this._tableStopCB = null;
    }
}
```
