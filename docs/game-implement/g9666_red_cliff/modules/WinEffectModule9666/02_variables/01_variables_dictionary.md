---
id: "game-implement:9666:module:WinEffectModule9666:variables"
title: "WinEffectModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "WinEffectModule9666", "win_effect_module9666", "variables", "fields", "properties"]
---

# 📋 `WinEffectModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **22** | `bigWinSkeleton` | `public` | `sp.Skeleton` | `@property` | Runtime state tracking `bigWinSkeleton` in `WinEffectModule9666`. |
| **26** | `milestoneRatios` | `public` | `number[]` | `@property` | Runtime state tracking `milestoneRatios` in `WinEffectModule9666`. |
| **29** | `milestoneDurations` | `public` | `number[]` | `@property` | Runtime state tracking `milestoneDurations` in `WinEffectModule9666`. |
| **31** | `_popupState` | `private` | `WinPopupState` | `WinPopupState.IDLE` | Runtime state tracking `_popupState` in `WinEffectModule9666`. |
| **32** | `_milestones` | `private` | `IMilestone[]` | `[]` | Runtime state tracking `_milestones` in `WinEffectModule9666`. |
| **33** | `_currentMilestoneIdx` | `private` | `number` | `-1` | Runtime state tracking `_currentMilestoneIdx` in `WinEffectModule9666`. |
| **34** | `_totalWinAmount` | `private` | `number` | `0` | Runtime state tracking `_totalWinAmount` in `WinEffectModule9666`. |
| **35** | `_currentDisplayAmount` | `private` | `number` | `0` | Runtime state tracking `_currentDisplayAmount` in `WinEffectModule9666`. |
| **36** | `_canClickToClose` | `private` | `boolean` | `false` | Runtime state tracking `_canClickToClose` in `WinEffectModule9666`. |
| **37** | `_isMoneySlotMoving` | `private` | `boolean` | `false` | Runtime state tracking `_isMoneySlotMoving` in `WinEffectModule9666`. |
| **38** | `_lastClickTime` | `private` | `number` | `0` | Runtime state tracking `_lastClickTime` in `WinEffectModule9666`. |
| **40** | `_tweenCounting` | `private` | `cc.Tween` | `null` | Runtime state tracking `_tweenCounting` in `WinEffectModule9666`. |
| **41** | `_tweenDebounce` | `private` | `cc.Tween` | `null` | Runtime state tracking `_tweenDebounce` in `WinEffectModule9666`. |
| **42** | `_tweenAutoClose` | `private` | `cc.Tween` | `null` | Runtime state tracking `_tweenAutoClose` in `WinEffectModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `WinEffectModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
