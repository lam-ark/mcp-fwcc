---
id: "game-implement:9666:module:TableModuleConfig9666:variables"
title: "TableModuleConfig9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "TableModuleConfig9666", "table_module_config9666", "variables", "fields", "properties"]
---

# 📋 `TableModuleConfig9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **22** | `SYMBOL_WIDTH` | `public` | `number` | `141` | Runtime state tracking `SYMBOL_WIDTH` in `TableModuleConfig9666`. |
| **23** | `SYMBOL_HEIGHT` | `public` | `number` | `110` | Runtime state tracking `SYMBOL_HEIGHT` in `TableModuleConfig9666`. |
| **24** | `TABLE_FORMAT` | `public` | `number[]` | `[4, 4, 4, 4, 4, 4]` | Runtime state tracking `TABLE_FORMAT` in `TableModuleConfig9666`. |
| **26** | `RANDOM_SYMBOLS_CODE` | `public` | `string[][]` | `this.TABLE_FORMAT.map(() => [` | Runtime state tracking `RANDOM_SYMBOLS_CODE` in `TableModuleConfig9666`. |
| **35** | `BUFFER_TOP` | `public` | `number` | `3` | Runtime state tracking `BUFFER_TOP` in `TableModuleConfig9666`. |
| **36** | `BUFFER_BOT` | `public` | `number` | `3` | Runtime state tracking `BUFFER_BOT` in `TableModuleConfig9666`. |
| **38** | `MODES` | `public` | `any` | `{` | Runtime state tracking `MODES` in `TableModuleConfig9666`. |
| **59** | `BEAUTY_MATRIX` | `public` | `string[][][]` | `[` | Runtime state tracking `BEAUTY_MATRIX` in `TableModuleConfig9666`. |

---

## 2. State Mutation Guardrails

All variables in `TableModuleConfig9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
