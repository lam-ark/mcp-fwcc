---
id: "cc_slot_module:SlotGameSettings:customization:override_points_matrix"
title: "SlotGameSettings Accessors & Extension Matrix"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "customization", "override_matrix", "getters_setters"]
---

# 📊 SlotGameSettings Accessors & Extension Matrix

## 1. Properties & Accessors Extension Matrix

| Property / Getter | Base Type & Default | Safe to Extend / Override? | Purpose in Custom Games |
| :--- | :--- | :--- | :--- |
| **`isTurboActive`** | `boolean` (`false`) | `YES (Getter / Setter)` | Can be hooked to trigger custom reel speed sound changes. |
| **`isFastToResult`** | `boolean` (computed) | `YES (Getter)` | Can be expanded to include additional fast-play conditions (e.g. Skip Button clicks). |
| **`gameSpeed`** | `number` (`1`) | `YES` | Can support custom speed tiers (e.g. 0.5x Slow Motion, 3x Hyper Speed). |
| **`currentGameState`**| `number` (`0`) | `YES` | Can track custom feature phases (e.g. Gamble round, Pick bonus). |
| **`isAutoSpin`** | `boolean` (`false`) | `YES` | Synchronizes custom auto-spin count displays. |
| **`isTrialMode`** | `boolean` (`false`) | `YES` | Controls custom demo badges or trial watermark overlays. |
| **`isJoinGameSuccess`**| `boolean` (`false`) | `YES` | Used by custom connection splash dialogs. |
