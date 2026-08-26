---
id: "game-implement:9666:module:MockBetHistoryDetailModuleBase:variables"
title: "MockBetHistoryDetailModuleBase Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "MockBetHistoryDetailModuleBase", "mock_bet_history_detail_module_base", "variables", "fields", "properties"]
---

# 📋 `MockBetHistoryDetailModuleBase` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **6** | `mockPages` | `private` | `BetHistoryDetailPage[]` | `[]` | Runtime state tracking `mockPages` in `MockBetHistoryDetailModuleBase`. |

---

## 2. State Mutation Guardrails

All variables in `MockBetHistoryDetailModuleBase` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
