---
id: "game-implement:9666:module:MockBetHistoryModuleBase:variables"
title: "MockBetHistoryModuleBase Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "MockBetHistoryModuleBase", "mock_bet_history_module_base", "variables", "fields", "properties"]
---

# 📋 `MockBetHistoryModuleBase` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **6** | `mockRepository` | `private` | `InMemoryBetHistoryRepository` | `null` | Runtime state tracking `mockRepository` in `MockBetHistoryModuleBase`. |

---

## 2. State Mutation Guardrails

All variables in `MockBetHistoryModuleBase` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
