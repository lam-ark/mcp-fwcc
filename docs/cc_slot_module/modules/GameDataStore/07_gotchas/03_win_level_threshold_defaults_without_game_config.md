---
id: "cc_slot_module:GameDataStore:gotcha:win_level_threshold_defaults_without_game_config"
title: "Gotcha: Fallback Thresholds Trigger Premature Big Win Dialogs"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "gotchas", "win_level", "game_config"]
---

# ⚠️ Gotcha: Fallback Thresholds Trigger Premature Big Win Dialogs

## 1. Defect Symptom
Wins of only 5x bet trigger Mega Win celebrations meant for 30x+ payouts.

---

## 2. Root Cause Analysis
If `gameConfig` is null or `WIN_LEVEL_CONFIG` is missing, `getWinLevel()` falls back to hardcoded defaults `[1, 5, 10]`:
```typescript
const thresholds: number[] = this.gameConfig?.WIN_LEVEL_CONFIG?.THRESHOLDS || [1, 5, 10];
```

---

## 3. Recommended Resolution
Always inject `GameConfig` containing calibrated multipliers:
```typescript
export const WIN_LEVEL_CONFIG = {
    THRESHOLDS: [5, 15, 30], // Level 1: <5x, Level 2: 5-15x, Level 3: 15-30x, Level 4: >30x
    COUNT_MONEY_TIME: { 1: 0, 2: 2, 3: 4, 4: 6 },
    WIN_LINE_TIME: { 1: 1, 2: 2, 3: 4, 4: 6 },
};
```
