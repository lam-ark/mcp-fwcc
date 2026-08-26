---
id: "game-implement:9666:module:TotalWinModule9666:variables"
title: "TotalWinModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "TotalWinModule9666", "total_win_module9666", "variables", "fields", "properties"]
---

# 📋 `TotalWinModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **15** | `totalWinSkeleton` | `public` | `sp.Skeleton` | `@property` | Runtime state tracking `totalWinSkeleton` in `TotalWinModule9666`. |
| **18** | `animDuration` | `public` | `number` | `@property` | Runtime state tracking `animDuration` in `TotalWinModule9666`. |
| **20** | `_popupState` | `private` | `TotalWinState` | `TotalWinState.IDLE` | Runtime state tracking `_popupState` in `TotalWinModule9666`. |
| **21** | `_isMoneySlotMoving` | `private` | `boolean` | `false` | Runtime state tracking `_isMoneySlotMoving` in `TotalWinModule9666`. |
| **22** | `_canClickToClose` | `private` | `boolean` | `false` | Runtime state tracking `_canClickToClose` in `TotalWinModule9666`. |
| **23** | `_targetWinAmount` | `private` | `number` | `0` | Runtime state tracking `_targetWinAmount` in `TotalWinModule9666`. |
| **25** | `_tweenCounting` | `private` | `cc.Tween` | `null` | Runtime state tracking `_tweenCounting` in `TotalWinModule9666`. |
| **26** | `_tweenDebounce` | `private` | `cc.Tween` | `null` | Runtime state tracking `_tweenDebounce` in `TotalWinModule9666`. |
| **27** | `_tweenAutoClose` | `private` | `cc.Tween` | `null` | Runtime state tracking `_tweenAutoClose` in `TotalWinModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `TotalWinModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
