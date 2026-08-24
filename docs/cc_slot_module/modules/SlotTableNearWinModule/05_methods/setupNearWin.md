---
id: "cc_slot_module:SlotTableNearWinModule:method:setupNearWin"
title: "SlotTableNearWinModule.setupNearWin Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "setupNearWin"]
---

# 🚀 `SlotTableNearWinModule.setupNearWin(params): void`

---

## 1. Method Signature

```typescript
public setupNearWin({ isTurboActive, matrix: originalMatrix, context }: {
    isTurboActive: boolean;
    matrix: string[][];
    context: any;
}): void
```

---

## 2. Trigger Source & Execution Lifecycle

Triggered via `this.node.emit("SETUP_NEARWIN", ...)` by `SlotTableModule` upon receiving spin matrix data from server/director.

---

## 3. Algorithmic Steps

1. Extracts clone matrix and sets `_isSkipEffect = this.isSkipNearWinTurbo && isTurboActive`.
2. Iterates columns `col = 0..matrix.length - 1`:
   - Calls `_setDataNearWin(col)` to evaluate near-win flags.
   - If `foundNearWin` is true and Turbo skip is false, calls `context.reels[col].extendTimeToStop(isNearWin, isLastReel)`.
   - Counts Scatters, Bonus, and Jackpot occurrences within `matrix[col]`.
   - Stores feature feasibility (`canWinBonus`, `canWinFree`, `canWinJP`) in `_nearWinData[col]`.

---

## 4. Full Source Code

```typescript
setupNearWin({ isTurboActive, matrix: originalMatrix, context }): void {
    const matrix = this._getMatrix(originalMatrix);
    this._isSkipEffect = this.isSkipNearWinTurbo && isTurboActive;

    const { SCATTER_SYMBOL, BONUS_SYMBOL, JACKPOT_SYMBOL } = this.config;
    let foundNearWin = false;
    for (let col = 0; col < matrix.length; col++) {
        this._setDataNearWin(col);
        const { isNearWin } = this._nearWinData[col] || {};
        foundNearWin = foundNearWin || isNearWin;
        if (foundNearWin && !this._isSkipEffect) {
            context.reels[col].extendTimeToStop(isNearWin, col === context.reels.length - 1);
        }

        for (let symbolName, row = 0; row < matrix[col].length; row++) {
            symbolName = matrix[col][row];
            if (symbolName === BONUS_SYMBOL) {
                this._countBonus++;
            }
            if (symbolName === SCATTER_SYMBOL) {
                this._countScatter++;
            }
            if (symbolName === JACKPOT_SYMBOL) {
                this._countJp++;
            }
        }
        this._nearWinData[col].canWinBonus = this._canWinBonus(col);
        this._nearWinData[col].canWinFree = this._canWinFree(col);
        this._nearWinData[col].canWinJP = this._canWinJP(col);
    }
}
```
