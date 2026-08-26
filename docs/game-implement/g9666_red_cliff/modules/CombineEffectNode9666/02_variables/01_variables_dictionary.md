---
id: "game-implement:9666:module:CombineEffectNode9666:variables"
title: "CombineEffectNode9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CombineEffectNode9666", "combine_effect_node9666", "variables", "fields", "properties"]
---

# 📋 `CombineEffectNode9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **7** | `_sizeY` | `private` | `number` | `@property` | Runtime state tracking `_sizeY` in `CombineEffectNode9666`. |

---

## 2. State Mutation Guardrails

All variables in `CombineEffectNode9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
