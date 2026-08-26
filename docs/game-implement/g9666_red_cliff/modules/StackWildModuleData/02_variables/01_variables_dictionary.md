---
id: "game-implement:9666:module:StackWildModuleData:variables"
title: "StackWildModuleData Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "StackWildModuleData", "stack_wild_module_data", "variables", "fields", "properties"]
---

# 📋 `StackWildModuleData` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **14** | `_config` | `private` | `StackWildModuleConfig` | `null` | Runtime state tracking `_config` in `StackWildModuleData`. |
| **15** | `_positions` | `private` | `cc.Vec2[][]` | `[]` | Runtime state tracking `_positions` in `StackWildModuleData`. |

---

## 2. State Mutation Guardrails

All variables in `StackWildModuleData` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
