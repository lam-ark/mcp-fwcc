---
id: "game-implement:9666:module:JackpotCollectionConfig9666:variables"
title: "JackpotCollectionConfig9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "JackpotCollectionConfig9666", "jackpot_collection_config9666", "variables", "fields", "properties"]
---

# 📋 `JackpotCollectionConfig9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **6** | `symbolCode` | `public` | `string` | `@property` | Runtime state tracking `symbolCode` in `JackpotCollectionConfig9666`. |
| **9** | `spriteFrame` | `public` | `cc.SpriteFrame` | `@property` | Runtime state tracking `spriteFrame` in `JackpotCollectionConfig9666`. |
| **15** | `symbolSpriteMappings` | `public` | `SymbolSpriteMapping9666[]` | `@property` | Runtime state tracking `symbolSpriteMappings` in `JackpotCollectionConfig9666`. |

---

## 2. State Mutation Guardrails

All variables in `JackpotCollectionConfig9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
