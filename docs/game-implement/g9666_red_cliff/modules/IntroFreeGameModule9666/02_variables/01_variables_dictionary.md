---
id: "game-implement:9666:module:IntroFreeGameModule9666:variables"
title: "IntroFreeGameModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "IntroFreeGameModule9666", "intro_free_game_module9666", "variables", "fields", "properties"]
---

# 📋 `IntroFreeGameModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **8** | `spine` | `public` | `sp.Skeleton` | `@property` | Runtime state tracking `spine` in `IntroFreeGameModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `IntroFreeGameModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
