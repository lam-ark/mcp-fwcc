---
id: "game-implement:9666:module:BetHistoryCommandOrderView9666:variables"
title: "BetHistoryCommandOrderView9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "BetHistoryCommandOrderView9666", "bet_history_command_order_view9666", "variables", "fields", "properties"]
---

# 📋 `BetHistoryCommandOrderView9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **10** | `root` | `private` | `cc.Node` | `null` | Runtime state tracking `root` in `BetHistoryCommandOrderView9666`. |
| **11** | `cells` | `private` | `{ [symbolCode: string]: BetHistoryCommandOrderCell9666 }` | `{}` | Runtime state tracking `cells` in `BetHistoryCommandOrderView9666`. |

---

## 2. State Mutation Guardrails

All variables in `BetHistoryCommandOrderView9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
