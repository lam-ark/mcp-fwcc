---
id: "game-implement:9666:cascade:edge_cases_and_gotchas"
title: "Red Cliff (g9666) Composite Cascade Edge Cases & Gotchas"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "gotchas", "edge_cases", "cascade", "fast_stop", "mega_symbols"]
---

# ⚠️ Red Cliff (g9666) Composite Cascade Edge Cases & Gotchas

---

## 1. Gotcha: Mega Symbol Parsing Index Corruption During Respin
- **Symptom**: During a second cascade respin, symbols on lower reels display incorrect skins or wrong visual sizes (`1x2` rendered as `1x1` or stretched).
- **Root Cause**: `splitTopAndMainTable()` received a stale `formatMatrix` from the previous spin instead of the respin matrix slice.
- **Fix**: In `SlotTableData9666` and `HorizontalTableModuleData9666`, always resolve `_getMegaSymbolsFormatMatrix()` by checking current playSession fields (`freeFormatMatrix` $\rightarrow$ `formatMatrix` $\rightarrow$ `normalFormatMatrix` $\rightarrow$ `DEFAULT_MEGA_FORMAT_MATRIX`).

---

## 2. Gotcha: Fast Stop Race Condition Freezing Grid
- **Symptom**: Spamming the Spin / Spacebar button immediately after initiating a spin causes reels to stop abruptly and freeze without emitting payline wins.
- **Root Cause**: Two concurrent calls to `stopSpin()` occurred when `TABLE_FAST_STOP` fired while `_pendingStopPromise` was not properly awaited.
- **Fix**: In `SlotTableModule9666.stopSpin()` and `HorizontalTableModule9666.stopSpin()`, capture and return `this._pendingStopPromise` when non-null:
```typescript
if (this._pendingStopPromise) {
    const pending = this._pendingStopPromise;
    this._pendingStopPromise = null;
    return pending;
}
```

---

## 3. Gotcha: Near-Win Refill Timeout Lockup
- **Symptom**: During cascade with 2 Scatters on board, the 3rd scatter column drops with delay, but the cascade promise never resolves.
- **Root Cause**: The scheduled completion timer `this.config.CASCADING_TIME_COMPLETED + extraDelay` did not account for speed decorator acceleration.
- **Fix**: Ensure all delay schedules in `VerticalCascadeModule9666` scale with `extraDelay / this.speed`.

---

## 4. Gotcha: Z-Index Bleed Between Top Reel and Vertical Column 0 & 5
- **Symptom**: Top horizontal reel symbols overlap visual frames of Reel 1 and Reel 6.
- **Fix**: Set top table container node `zIndex = 2` and ensure clipping mask (`cc.Mask`) bounds on the top reel match exactly columns 2..5 width (`141 * 4 = 564px`).
