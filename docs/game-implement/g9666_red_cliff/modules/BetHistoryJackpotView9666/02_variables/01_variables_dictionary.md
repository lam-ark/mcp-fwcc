---
id: "game-implement:9666:module:BetHistoryJackpotView9666:variables"
title: "BetHistoryJackpotView9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "BetHistoryJackpotView9666", "bet_history_jackpot_view9666", "variables", "fields", "properties"]
---

# 📋 `BetHistoryJackpotView9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **2** | `root` | `private` | `cc.Node` | `null` | Runtime state tracking `root` in `BetHistoryJackpotView9666`. |
| **3** | `labelTemplate` | `private` | `cc.Node` | `null` | Runtime state tracking `labelTemplate` in `BetHistoryJackpotView9666`. |
| **4** | `amountLabel` | `private` | `cc.Label` | `null` | Runtime state tracking `amountLabel` in `BetHistoryJackpotView9666`. |

---

## 2. State Mutation Guardrails

All variables in `BetHistoryJackpotView9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
