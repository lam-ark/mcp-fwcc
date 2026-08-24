---
id: "cc_slot_module:SlotTableModule:method:stopSpin"
title: "SlotTableModule.stopSpin() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "stopSpin", "showResult"]
---

# `SlotTableModule.stopSpin(matrix?: string[][], _forceStop?: boolean): Promise<void>`

---

## 1. Method Signature
```typescript
public stopSpin(matrix?: string[][], _forceStop?: boolean): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Reads `this._matrix = matrix || this._slotTableData.getMatrix()`.
2. Stores `this._lastMatrix = [...this._matrix]`.
3. Transitions state to `TableSpinState.SHOWING_RESULT`.
4. Emits `this.node.emit("PROCESS_BEFORE_STOP_REELS", { mode: this.currentMode, context: this })`.
5. Iterates through columns:
   `reelComponent.showResult(reelData, this.onReelStop.bind(this), this.onReelPreStop.bind(this))`.
6. Dispatches near-win setup:
   `this.node.emit("SETUP_NEARWIN", { matrix: this._matrix, isTurboActive: this.currentMode.isTurbo, context: this })`.
7. Returns a `Promise<void>` assigned to `this._tableStopCB`.

---

## 3. Un-truncated Source Code Implementation
```typescript
stopSpin(matrix?: string[][], _forceStop?: boolean): Promise<void> {
    this._matrix = matrix || this._slotTableData.getMatrix();

    this._lastMatrix = [...this._matrix];
    this.onChangeState(TableSpinState.SHOWING_RESULT);

    this.node.emit("PROCESS_BEFORE_STOP_REELS", { mode: this.currentMode, context: this });

    this.reels.forEach((reelComponent, index) => {
        const reelData = [...this._matrix[index]];
        reelComponent.showResult(reelData, this.onReelStop.bind(this), this.onReelPreStop.bind(this));
    });

    this.node.emit("SETUP_NEARWIN", { matrix: this._matrix, isTurboActive: this.currentMode.isTurbo, context: this });

    return new Promise((resolve) => {
        this._tableStopCB = resolve;
    });
}
```
