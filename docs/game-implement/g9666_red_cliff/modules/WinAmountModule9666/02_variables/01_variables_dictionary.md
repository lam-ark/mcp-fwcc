---
id: "game-implement:9666:module:WinAmountModule9666:variables"
title: "WinAmountModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "WinAmountModule9666", "win_amount_module9666", "variables", "fields", "properties"]
---

# 📋 `WinAmountModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **12** | `_shouldPlayWinEffect` | `private` | `boolean` | `false` | Runtime state tracking `_shouldPlayWinEffect` in `WinAmountModule9666`. |
| **13** | `_currentTotalWin` | `private` | `number` | `0` | Runtime state tracking `_currentTotalWin` in `WinAmountModule9666`. |
| **14** | `_pendingRespinWin` | `private` | `number` | `0` | Runtime state tracking `_pendingRespinWin` in `WinAmountModule9666`. |
| **15** | `_accumulatedRespinWin` | `private` | `number` | `0` | Runtime state tracking `_accumulatedRespinWin` in `WinAmountModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `WinAmountModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
