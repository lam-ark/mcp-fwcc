---
id: "game-implement:9666:module:VerticalCascadeModule9666:variables"
title: "VerticalCascadeModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "VerticalCascadeModule9666", "vertical_cascade_module9666", "variables", "fields", "properties"]
---

# 📋 `VerticalCascadeModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **17** | `nearWinStaggerTime` | `public` | `number` | `@property` | Runtime state tracking `nearWinStaggerTime` in `VerticalCascadeModule9666`. |
| **19** | `_nearWinColumnDelays` | `protected` | `number[]` | `[]` | Runtime state tracking `_nearWinColumnDelays` in `VerticalCascadeModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `VerticalCascadeModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
