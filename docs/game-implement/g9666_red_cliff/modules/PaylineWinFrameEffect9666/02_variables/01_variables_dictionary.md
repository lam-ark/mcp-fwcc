---
id: "game-implement:9666:module:PaylineWinFrameEffect9666:variables"
title: "PaylineWinFrameEffect9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "PaylineWinFrameEffect9666", "payline_win_frame_effect9666", "variables", "fields", "properties"]
---

# 📋 `PaylineWinFrameEffect9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **15** | `spineSkeleton` | `public` | `sp.Skeleton` | `@property` | Runtime state tracking `spineSkeleton` in `PaylineWinFrameEffect9666`. |

---

## 2. State Mutation Guardrails

All variables in `PaylineWinFrameEffect9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
