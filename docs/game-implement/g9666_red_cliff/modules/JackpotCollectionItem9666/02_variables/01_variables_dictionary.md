---
id: "game-implement:9666:module:JackpotCollectionItem9666:variables"
title: "JackpotCollectionItem9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "JackpotCollectionItem9666", "jackpot_collection_item9666", "variables", "fields", "properties"]
---

# 📋 `JackpotCollectionItem9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **8** | `sprIcon` | `public` | `cc.Sprite` | `@property` | Runtime state tracking `sprIcon` in `JackpotCollectionItem9666`. |
| **11** | `lbProgress` | `public` | `cc.Label` | `@property` | Runtime state tracking `lbProgress` in `JackpotCollectionItem9666`. |
| **14** | `checkmark` | `public` | `cc.Node` | `@property` | Runtime state tracking `checkmark` in `JackpotCollectionItem9666`. |
| **16** | `_symbolCode` | `private` | `string` | `""` | Runtime state tracking `_symbolCode` in `JackpotCollectionItem9666`. |

---

## 2. State Mutation Guardrails

All variables in `JackpotCollectionItem9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
