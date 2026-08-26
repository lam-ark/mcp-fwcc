---
id: "game-implement:9666:module:PaylineInfoModule9666:variables"
title: "PaylineInfoModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "PaylineInfoModule9666", "payline_info_module9666", "variables", "fields", "properties"]
---

# 📋 `PaylineInfoModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **12** | `gameSettings` | `injected` | `SlotGameSettings` | `@inject(SlotGameSettings)` | Runtime state tracking `gameSettings` in `PaylineInfoModule9666`. |
| **13** | `moneyTween` | `injected` | `eno.MoneyTween` | `@inject(MoneyTween)` | Runtime state tracking `moneyTween` in `PaylineInfoModule9666`. |
| **16** | `extraAmountWin` | `public` | `cc.Label` | `@property` | Runtime state tracking `extraAmountWin` in `PaylineInfoModule9666`. |
| **19** | `hsnCombineSpine` | `public` | `sp.Skeleton` | `@property` | Runtime state tracking `hsnCombineSpine` in `PaylineInfoModule9666`. |
| **22** | `multiLabel` | `public` | `cc.Label` | `@property` | Runtime state tracking `multiLabel` in `PaylineInfoModule9666`. |
| **24** | `_lastAccumulatedWin` | `private` | `number` | `0` | Runtime state tracking `_lastAccumulatedWin` in `PaylineInfoModule9666`. |
| **25** | `_paylineInfoData` | `private` | `PaylineInfoData9666` | `null` | Runtime state tracking `_paylineInfoData` in `PaylineInfoModule9666`. |
| **26** | `_uiManagerData` | `private` | `eno.UIManagerData` | `null` | Runtime state tracking `_uiManagerData` in `PaylineInfoModule9666`. |
| **27** | `_tweenTotalWin` | `private` | `cc.Tween` | `null` | Runtime state tracking `_tweenTotalWin` in `PaylineInfoModule9666`. |
| **28** | `_tweenFadeRight` | `private` | `cc.Tween` | `null` | Runtime state tracking `_tweenFadeRight` in `PaylineInfoModule9666`. |
| **29** | `_isMultiLabelFollowingBone` | `private` | `boolean` | `false` | Runtime state tracking `_isMultiLabelFollowingBone` in `PaylineInfoModule9666`. |
| **30** | `_isExtraAmountWinFollowingBone` | `private` | `boolean` | `false` | Runtime state tracking `_isExtraAmountWinFollowingBone` in `PaylineInfoModule9666`. |
| **31** | `_isPlayingApplyMultiToExtraPayline` | `private` | `boolean` | `false` | Runtime state tracking `_isPlayingApplyMultiToExtraPayline` in `PaylineInfoModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `PaylineInfoModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
