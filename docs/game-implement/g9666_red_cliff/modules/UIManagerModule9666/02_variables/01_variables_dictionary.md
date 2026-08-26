---
id: "game-implement:9666:module:UIManagerModule9666:variables"
title: "UIManagerModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "UIManagerModule9666", "uimanager_module9666", "variables", "fields", "properties"]
---

# 📋 `UIManagerModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **9** | `_trialModeLoopController` | `private` | `TrialModeLoopController9666` | `null` | Runtime state tracking `_trialModeLoopController` in `UIManagerModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `UIManagerModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
