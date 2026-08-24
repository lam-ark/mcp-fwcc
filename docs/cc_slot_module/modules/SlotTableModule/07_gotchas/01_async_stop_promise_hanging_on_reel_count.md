---
id: "cc_slot_module:SlotTableModule:gotcha:async_stop_promise_hanging_on_reel_count"
title: "Gotcha: Table Stop Promise Hanging Indefinitely"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "gotchas", "promise_hang", "reel_count"]
---

# ⚠️ Gotcha: Table Stop Promise Hanging Indefinitely

## 1. Defect Symptom
After the reels visually stop spinning, the game never proceeds to show winning lines or update balances. The spin button remains permanently disabled.

---

## 2. Root Cause Analysis
`stopSpin()` returns a `Promise<void>` that only resolves inside `onReelStop()` when `this.reelCount >= this.reels.length`:
```typescript
if (this.reelCount >= this.reels.length) {
    this.onChangeState(TableSpinState.STOPPED);
    this._tableStopCB && this._tableStopCB();
    this._tableStopCB = null;
}
```
If an override of `onReelStopExtend()` throws an unhandled error or if a reel column fails to invoke its completion callback, `this._tableStopCB` is never called.

---

## 3. Recommended Resolution
Always wrap `onReelStopExtend` calls in `try/catch` and ensure all custom reel column controllers reliably invoke their stop callback even on fast-stop triggers.
