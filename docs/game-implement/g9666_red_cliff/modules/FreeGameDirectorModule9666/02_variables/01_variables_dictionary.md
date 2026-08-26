---
id: "game-implement:9666:module:FreeGameDirectorModule9666:variables"
title: "FreeGameDirectorModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "FreeGameDirectorModule9666", "free_game_director_module9666", "variables", "fields", "properties"]
---

# 📋 `FreeGameDirectorModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **7** | `slotSymbolManager` | `protected` | `SlotSymbolManager` | `null` | Runtime state tracking `slotSymbolManager` in `FreeGameDirectorModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `FreeGameDirectorModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
