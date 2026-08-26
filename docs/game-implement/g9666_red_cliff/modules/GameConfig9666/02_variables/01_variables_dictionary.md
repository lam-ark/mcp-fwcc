---
id: "game-implement:9666:module:GameConfig9666:variables"
title: "GameConfig9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "GameConfig9666", "game_config9666", "variables", "fields", "properties"]
---

# 📋 `GameConfig9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **13** | `USE_MOCKUP` | `public` | `boolean` | `false` | Runtime state tracking `USE_MOCKUP` in `GameConfig9666`. |
| **17** | `TOTAL_BET_CREDIT` | `public` | `number` | `20` | Runtime state tracking `TOTAL_BET_CREDIT` in `GameConfig9666`. |

---

## 2. State Mutation Guardrails

All variables in `GameConfig9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
