---
id: "cc_slot_module:GameConfig:game_flow:timing_execution_matrix"
title: "GameConfig Execution Timing & Values Read Matrix"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "game_flow", "timing_matrix", "execution_order"]
---

# ⏱️ GameConfig Execution Timing & Values Read Matrix

## 1. Timing Matrix

| Phase | Invoking Subsystem | Configuration Read | Immediate Execution Consequence |
| :--- | :--- | :--- | :--- |
| **Scene Load** | `GameInit` | `GAME_ID`, `DEFAULT_LANGUAGE`, `EXTEND_GAME_TEXT` | Sets up language locale and registers game text dictionary. |
| **Table Init** | `SlotTableModule` | `TABLE_FORMAT`, `SYMBOL_WIDTH`, `SYMBOL_HEIGHT` | Determines grid coordinates, column counts, and column reel heights. |
| **Spin Start** | `BetModule` | `PAY_SYSTEM`, `TOTAL_BET_CREDIT`, `DEFAULT_BET` | Sets initial wager calculations and bet multipliers. |
| **Symbol Settle** | `SlotSymbolManager` | `SYMBOL_CONFIG` | Orders special symbols (Wild, Scatter, Bonus, Jackpot) with priority 1..4. |
| **Win Presentation** | `PaylineInfoModule` | `WIN_LEVEL_CONFIG` | Resolves count-up money audio duration and big win cutscene triggers. |
