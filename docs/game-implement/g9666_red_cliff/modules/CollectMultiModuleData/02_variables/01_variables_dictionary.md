---
id: "game-implement:9666:module:CollectMultiModuleData:variables"
title: "CollectMultiModuleData Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CollectMultiModuleData", "collect_multi_module_data", "variables", "fields", "properties"]
---

# 📋 `CollectMultiModuleData` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **14** | `_k1Symbols` | `private` | `K1SymbolData[]` | `[]` | Runtime state tracking `_k1Symbols` in `CollectMultiModuleData`. |
| **15** | `_tableFormat` | `private` | `number[]` | `[4, 5, 5, 5, 5, 4]` | Runtime state tracking `_tableFormat` in `CollectMultiModuleData`. |

---

## 2. State Mutation Guardrails

All variables in `CollectMultiModuleData` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
