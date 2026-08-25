---
id: "cc_slot_module:overview:win_evaluation_payline_and_celebration_hierarchy"
title: "Win Evaluation, Payline Presentation & Celebration Hierarchy"
category: "cc_slot_module"
tags: ["cc_slot_module", "overview", "win_evaluation", "paylines", "win_level", "big_win", "cutscenes", "celebration_hierarchy"]
---

# 🏆 Win Evaluation, Payline Presentation & Celebration Hierarchy

---

## 1. Win Level Classification & Evaluation

The win evaluation system in `cc-slot-module` categorizes winning rounds into distinct tiers based on the **Payout Multiplier Ratio**:

$$\text{Win Ratio} = \frac{\text{Win Amount}}{\text{Total Bet}}$$

```mermaid
graph LR
    Ratio[Win Ratio = Win / TotalBet] --> Thresholds{Evaluate WIN_LEVEL_CONFIG.THRESHOLDS}
    
    Thresholds -->|Ratio < 5x| L1[Level 1: Standard / Small Win]
    Thresholds -->|5x <= Ratio < 15x| L2[Level 2: Medium Win]
    Thresholds -->|15x <= Ratio < 30x| L3[Level 3: Big Win]
    Thresholds -->|Ratio >= 30x| L4[Level 4: Mega / Super Win]
```

### Standard Configuration Matrix (`WIN_LEVEL_CONFIG`):
| Tier (Win Level) | Multiplier Threshold | Number Counter Duration (`COUNT_MONEY_TIME`) | Payline Presentation Duration (`WIN_LINE_TIME`) | Cutscene Modal |
| :--- | :--- | :--- | :--- | :--- |
| **Level 1 (Small Win)** | $< 5\times$ | 0.5s | 1.0s | None (Line flash only) |
| **Level 2 (Medium Win)**| $5\times - 15\times$ | 2.0s | 2.0s | None (Fast rollup) |
| **Level 3 (Big Win)** | $15\times - 30\times$ | 4.0s | 4.0s | Shows `BIG_WIN` dialog |
| **Level 4 (Mega / Super)** | $> 30\times$ | 6.0s – 10.0s | 6.0s – 8.0s | Shows `MEGA_WIN` / `SUPER_WIN` dialog |

---

## 2. Win Presentation Pipeline

When a spin produces winning paylines, the presentation pipeline executes across 3 synchronized phases:

```mermaid
sequenceDiagram
    autonumber
    participant Dir as GameModeDirectorModule
    participant Pay as SlotTablePaylineModule
    participant WinUI as WinAmountModule
    participant Cut as CutsceneModule

    Note over Dir,Pay: Phase 1: All-Lines Highlight & Initial Rollup
    Dir->>Pay: BLINK_ALL_PAYLINES (Simultaneous flash of all winning symbols)
    Dir->>WinUI: UPDATE_WIN_AMOUNT (Initiate number rollup counter)
    
    Note over Dir,Cut: Phase 2: Celebration Cutscene (if Big Win or above)
    opt isBigWin() == true
        Dir->>Cut: PLAY_CUTSCENE (BigWin / MegaWin / Jackpot)
        Cut-->>Dir: Player skips or celebration completes
    end
    
    Note over Dir,Pay: Phase 3: Sequential Payline Cycling
    Dir->>Pay: SHOW_ALL_PAYLINES (Individual line-by-line cycling)
```

### The 3 Presentation Phases in Detail:
1. **Consolidated Overview (`BLINK_ALL_PAYLINES`)**:
   - All symbols participating in any winning combination simultaneously play their Spine win animation.
   - Provides immediate visual feedback to the player on the scope of their win across the entire grid.
2. **Peak Celebration (`Cutscene & Rolling Money`)**:
   - `WinAmountModule` rolls up numbers from zero to the final win amount accompanied by pitch-shifted coin audio (`Coin Roll SFX`).
   - For Big Win or Jackpot tiers: Triggers a fullscreen modal celebration with particle showers and hero character animations.
3. **Sequential Line Cycling (`SHOW_ALL_PAYLINES`)**:
   - After the rollup counter finishes, the game enters an idle payline cycling state, illuminating individual payline tracks one by one while dimming non-participating symbols to allow players to inspect individual paytable rewards.
