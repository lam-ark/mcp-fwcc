---
id: "game-implement:9666:module:LoadingProgressLabel9666:variables"
title: "LoadingProgressLabel9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "LoadingProgressLabel9666", "loading_progress_label9666", "variables", "fields", "properties"]
---

# 📋 `LoadingProgressLabel9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **13** | `progressBar` | `public` | `cc.ProgressBar` | `@property` | Runtime state tracking `progressBar` in `LoadingProgressLabel9666`. |
| **16** | `progressLabel` | `public` | `cc.Label` | `@property` | Runtime state tracking `progressLabel` in `LoadingProgressLabel9666`. |
| **19** | `progressIcon` | `public` | `cc.Node` | `@property` | Runtime state tracking `progressIcon` in `LoadingProgressLabel9666`. |
| **22** | `iconStartX` | `public` | `number` | `@property` | Runtime state tracking `iconStartX` in `LoadingProgressLabel9666`. |
| **25** | `iconEndX` | `public` | `number` | `@property` | Runtime state tracking `iconEndX` in `LoadingProgressLabel9666`. |
| **27** | `displayedPercent` | `private` | `number` | `-1` | Runtime state tracking `displayedPercent` in `LoadingProgressLabel9666`. |

---

## 2. State Mutation Guardrails

All variables in `LoadingProgressLabel9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
