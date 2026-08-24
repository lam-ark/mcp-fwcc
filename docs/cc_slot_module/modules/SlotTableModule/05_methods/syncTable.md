---
id: "cc_slot_module:SlotTableModule:method:syncTable"
title: "SlotTableModule.syncTable() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "syncTable", "resumeReel"]
---

# `SlotTableModule.syncTable(matrix?: string[][], gameMode?: number): void`

---

## 1. Method Signature
```typescript
public syncTable(matrix?: string[][], gameMode?: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Obtains matrix payload: `this._matrix = matrix || this._slotTableData.getResumeMatrix(gameMode)`.
2. Exits early if `this._matrix` is null or empty.
3. Invokes `this.removeAllSymbols()` to recycle active symbols into the pool.
4. Ensures `this.table.active = true`.
5. Calls `this.mapResumeMatrix()` (virtual extension hook).
6. Copies snapshot: `this._lastMatrix = [...this._matrix]`.
7. Iterates through columns:
   `reelComponent.clearSymbols(); reelComponent.resumeReel(reelData);`.

---

## 3. Un-truncated Source Code Implementation
```typescript
syncTable(matrix?: string[][], gameMode?: number): void {
    this._matrix = matrix || this._slotTableData.getResumeMatrix(gameMode);
    if (!this._matrix || !this._matrix.length) {
        return;
    }
    // remove all symbols one time, be careful if other module is using symbols
    this.removeAllSymbols();
    this.table.active = true;
    this.mapResumeMatrix();
    this._lastMatrix = [...this._matrix];
    this.reels.forEach((reelComponent, index) => {
        const reelData = [...this._matrix[index]];
        reelComponent.clearSymbols();
        reelComponent.resumeReel(reelData);
    });
}
```
