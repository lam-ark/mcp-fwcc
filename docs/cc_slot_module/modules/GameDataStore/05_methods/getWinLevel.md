---
id: "cc_slot_module:GameDataStore:method:getWinLevel"
title: "GameDataStore.getWinLevel() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getWinLevel", "win_level", "rate", "FloatUtils"]
---

# `GameDataStore.getWinLevel(win?: number): number`

---

## 1. Method Signature
```typescript
public getWinLevel(win?: number): number
```

---

## 2. When Is It Called & Trigger Source
* **Invoking Entity**: `getWinAmountInfo()`, `WinEffectModule`, `SlotSoundPlayerModule`.

---

## 3. Detailed Algorithmic Execution Logic
1. Resolves `win`: uses passed parameter, or falls back to `this.playSession.winAmount` or `0`.
2. Computes `rate = FloatUtils.div(win, totalBet)`.
3. Compares `rate` against `this.gameConfig.WIN_LEVEL_CONFIG.THRESHOLDS`:
   * `rate < THRESHOLDS[0]` (1.0) ➔ returns **1** (Small Win).
   * `rate < THRESHOLDS[1]` (5.0) ➔ returns **2** (Medium Win).
   * `rate < THRESHOLDS[2]` (10.0) ➔ returns **3** (Big Win).
   * `rate >= THRESHOLDS[2]` ➔ returns **4** (Mega / Super Win).

---

## 4. Un-truncated Source Code Implementation
```typescript
getWinLevel(win?: number): number {
    const { winAmount, totalBet } = this.playSession;
    win = win || winAmount || 0;
    const rate = totalBet ? eno.FloatUtils.div(win, totalBet) : 0;
    const thresholds: number[] = this.gameConfig && this.gameConfig.WIN_LEVEL_CONFIG && this.gameConfig.WIN_LEVEL_CONFIG.THRESHOLDS || [1, 5, 10];
    if (rate < thresholds[0]) {
        return 1;
    }
    if (rate < thresholds[1]) {
        return 2;
    }
    if (rate < thresholds[2]) {
        return 3;
    }
    return 4;
}
```
