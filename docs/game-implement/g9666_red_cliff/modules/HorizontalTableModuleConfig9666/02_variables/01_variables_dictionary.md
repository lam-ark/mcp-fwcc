---
id: "game-implement:9666:module:HorizontalTableModuleConfig9666:variables"
title: "HorizontalTableModuleConfig9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "HorizontalTableModuleConfig9666", "horizontal_table_module_config9666", "variables", "fields", "properties"]
---

# 📋 `HorizontalTableModuleConfig9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **7** | `SYMBOL_WIDTH` | `public` | `number` | `141` | Runtime state tracking `SYMBOL_WIDTH` in `HorizontalTableModuleConfig9666`. |
| **8** | `SYMBOL_HEIGHT` | `public` | `number` | `110` | Runtime state tracking `SYMBOL_HEIGHT` in `HorizontalTableModuleConfig9666`. |
| **9** | `TABLE_FORMAT` | `public` | `number[]` | `[4]` | Runtime state tracking `TABLE_FORMAT` in `HorizontalTableModuleConfig9666`. |
| **19** | `MODES` | `public` | `any` | `{` | Runtime state tracking `MODES` in `HorizontalTableModuleConfig9666`. |
| **40** | `BEAUTY_MATRIX` | `public` | `string[][][]` | `[` | Runtime state tracking `BEAUTY_MATRIX` in `HorizontalTableModuleConfig9666`. |

---

## 2. State Mutation Guardrails

All variables in `HorizontalTableModuleConfig9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
