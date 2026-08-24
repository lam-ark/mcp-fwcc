---
id: "cc_slot_module:GameDataStore:method:getWinLevel"
title: "GameDataStore.getWinLevel() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getWinLevel", "win_level", "THRESHOLDS", "math"]
---

# `GameDataStore.getWinLevel(win?: number): number`

---

## 1. Method Signature
```typescript
public getWinLevel(win?: number): number
```

---

## 2. Detailed Algorithmic Execution Logic
1. Fallbacks `win` to `this.playSession.winAmount` or `0`.
2. Computes the payout ratio: `rate = totalBet ? eno.FloatUtils.div(win, totalBet) : 0`.
3. Compares `rate` against `this.gameConfig.WIN_LEVEL_CONFIG.THRESHOLDS` (defaults to `[1, 5, 10]`):
   * `rate < thresholds[0]` (e.g. `< 1x`) ➔ Level `1` (Normal Win)
   * `rate < thresholds[1]` (e.g. `< 5x`) ➔ Level `2` (Medium Win)
   * `rate < thresholds[2]` (e.g. `< 10x`) ➔ Level `3` (Big Win)
   * `rate >= thresholds[2]` (e.g. `>= 10x`) ➔ Level `4` (Mega / Super Win)

---

## 3. Un-truncated Source Code Implementation
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
