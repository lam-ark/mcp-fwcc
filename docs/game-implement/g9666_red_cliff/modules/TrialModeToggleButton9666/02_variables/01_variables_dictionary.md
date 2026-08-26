---
id: "game-implement:9666:module:TrialModeToggleButton9666:variables"
title: "TrialModeToggleButton9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "TrialModeToggleButton9666", "trial_mode_toggle_button9666", "variables", "fields", "properties"]
---

# 📋 `TrialModeToggleButton9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **15** | `realModeFrame` | `public` | `cc.SpriteFrame` | `@property` | Runtime state tracking `realModeFrame` in `TrialModeToggleButton9666`. |
| **18** | `trialModeFrame` | `public` | `cc.SpriteFrame` | `@property` | Runtime state tracking `trialModeFrame` in `TrialModeToggleButton9666`. |
| **21** | `sfxToggleModeId` | `public` | `string` | `@property` | Runtime state tracking `sfxToggleModeId` in `TrialModeToggleButton9666`. |
| **23** | `_button` | `private` | `cc.Button` | `null` | Runtime state tracking `_button` in `TrialModeToggleButton9666`. |
| **24** | `_sprite` | `private` | `cc.Sprite` | `null` | Runtime state tracking `_sprite` in `TrialModeToggleButton9666`. |
| **25** | `_uiManagerData` | `private` | `eno.UIManagerData` | `null` | Runtime state tracking `_uiManagerData` in `TrialModeToggleButton9666`. |
| **26** | `_trialModeData` | `private` | `eno.TrialModeData` | `null` | Runtime state tracking `_trialModeData` in `TrialModeToggleButton9666`. |
| **27** | `_promotionData` | `private` | `eno.PromotionData` | `null` | Runtime state tracking `_promotionData` in `TrialModeToggleButton9666`. |
| **28** | `_isTrialMode` | `private` | `boolean` | `false` | Runtime state tracking `_isTrialMode` in `TrialModeToggleButton9666`. |
| **29** | `_canEnterTrial` | `private` | `boolean` | `false` | Runtime state tracking `_canEnterTrial` in `TrialModeToggleButton9666`. |
| **30** | `_canExitTrial` | `private` | `boolean` | `false` | Runtime state tracking `_canExitTrial` in `TrialModeToggleButton9666`. |
| **31** | `_isUserInteractionEnabled` | `private` | `boolean` | `false` | Runtime state tracking `_isUserInteractionEnabled` in `TrialModeToggleButton9666`. |
| **32** | `_hasPromotion` | `private` | `boolean` | `false` | Runtime state tracking `_hasPromotion` in `TrialModeToggleButton9666`. |
| **33** | `_isCutsceneBlocking` | `private` | `boolean` | `false` | Runtime state tracking `_isCutsceneBlocking` in `TrialModeToggleButton9666`. |
| **34** | `_pendingTrialMode` | `private` | `boolean | null` | `null` | Runtime state tracking `_pendingTrialMode` in `TrialModeToggleButton9666`. |
| **35** | `_pendingSourceUnavailable` | `private` | `boolean` | `false` | Runtime state tracking `_pendingSourceUnavailable` in `TrialModeToggleButton9666`. |
| **36** | `_pendingInteractionDisabled` | `private` | `boolean` | `false` | Runtime state tracking `_pendingInteractionDisabled` in `TrialModeToggleButton9666`. |

---

## 2. State Mutation Guardrails

All variables in `TrialModeToggleButton9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
