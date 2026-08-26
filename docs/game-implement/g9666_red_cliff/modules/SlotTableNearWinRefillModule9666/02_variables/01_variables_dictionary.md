---
id: "game-implement:9666:module:SlotTableNearWinRefillModule9666:variables"
title: "SlotTableNearWinRefillModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotTableNearWinRefillModule9666", "slot_table_near_win_refill_module9666", "variables", "fields", "properties"]
---

# 📋 `SlotTableNearWinRefillModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **8** | `_liveMatrixScatterCount` | `private` | `number` | `0` | Runtime state tracking `_liveMatrixScatterCount` in `SlotTableNearWinRefillModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `SlotTableNearWinRefillModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
