---
id: "game-implement:9666:module:MultiplierModule9666:variables"
title: "MultiplierModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "MultiplierModule9666", "multiplier_module9666", "variables", "fields", "properties"]
---

# 📋 `MultiplierModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **10** | `lbMultiplier` | `public` | `cc.Label` | `@property` | Runtime state tracking `lbMultiplier` in `MultiplierModule9666`. |
| **14** | `_multiplierData` | `private` | `MultiplierData9666` | `null` | Runtime state tracking `_multiplierData` in `MultiplierModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `MultiplierModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
