---
id: "cc_slot_module:GameDataStore:recipe:custom_win_level_time_curves"
title: "Recipe: Calibrating Custom Win Level Time Curves"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "recipe", "win_level_curves"]
---

# 🍳 Recipe: Calibrating Custom Win Level Time Curves

## 1. Problem Statement
Configure snappy count-up times for small wins while delivering an extended 10-second celebration for Jackpot/Super Mega wins.

---

## 2. Implementation

In `GameConfig.ts`:
```typescript
export const GAME_WIN_LEVEL_CONFIG = {
    THRESHOLDS: [2, 10, 25], // Level 1: <2x, Level 2: 2-10x, Level 3: 10-25x, Level 4: >25x
    COUNT_MONEY_TIME: {
        1: 0.5,  // Fast roll for small win
        2: 2.0,  // Medium win roll
        3: 5.0,  // Big win roll
        4: 10.0, // Super Mega win roll
    },
    WIN_LINE_TIME: {
        1: 1.0,
        2: 2.0,
        3: 4.0,
        4: 8.0,
    }
};
```
When `getWinAmountInfo()` is queried, `GameDataStore` automatically calculates the correct durations matching these thresholds.
