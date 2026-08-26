---
id: "game-implement:9666:module:JackpotCollectionModule9666:variables"
title: "JackpotCollectionModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "JackpotCollectionModule9666", "jackpot_collection_module9666", "variables", "fields", "properties"]
---

# 📋 `JackpotCollectionModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **10** | `itemPrefab` | `public` | `cc.Prefab` | `@property` | Runtime state tracking `itemPrefab` in `JackpotCollectionModule9666`. |
| **13** | `itemContainer` | `public` | `cc.Node` | `@property` | Runtime state tracking `itemContainer` in `JackpotCollectionModule9666`. |
| **15** | `_dataModule` | `private` | `JackpotCollectionData9666` | `null` | Runtime state tracking `_dataModule` in `JackpotCollectionModule9666`. |
| **16** | `_items` | `private` | `JackpotCollectionItem9666[]` | `[]` | Runtime state tracking `_items` in `JackpotCollectionModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `JackpotCollectionModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
