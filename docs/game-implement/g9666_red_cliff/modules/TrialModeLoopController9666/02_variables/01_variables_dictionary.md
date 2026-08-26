---
id: "game-implement:9666:module:TrialModeLoopController9666:variables"
title: "TrialModeLoopController9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "TrialModeLoopController9666", "trial_mode_loop_controller9666", "variables", "fields", "properties"]
---

# 📋 `TrialModeLoopController9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **12** | `gameLogic` | `private` | `any` | `undefined` | Runtime state tracking `gameLogic` in `TrialModeLoopController9666`. |
| **13** | `originalPlayTrialMode` | `private` | `any` | `null` | Runtime state tracking `originalPlayTrialMode` in `TrialModeLoopController9666`. |
| **14** | `playTrialModeProxy` | `private` | `any` | `null` | Runtime state tracking `playTrialModeProxy` in `TrialModeLoopController9666`. |
| **15** | `finalizeManualTrialCallback` | `private` | `any` | `null` | Runtime state tracking `finalizeManualTrialCallback` in `TrialModeLoopController9666`. |
| **16** | `installed` | `private` | `boolean` | `false` | Runtime state tracking `installed` in `TrialModeLoopController9666`. |

---

## 2. State Mutation Guardrails

All variables in `TrialModeLoopController9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
