---
id: "game-implement:9666:module:NormalGameDirectorModule9666:variables"
title: "NormalGameDirectorModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "variables", "fields", "properties"]
---

# 📋 `NormalGameDirectorModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **8** | `slotSymbolManager` | `protected` | `SlotSymbolManager` | `null` | Runtime state tracking `slotSymbolManager` in `NormalGameDirectorModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `NormalGameDirectorModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
