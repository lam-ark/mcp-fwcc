---
id: "cc_slot_module:SlotGameSettings:director_writer:subsystem_impacts"
title: "SlotGameSettings Subsystem Impacts"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "director", "subsystems", "table", "wallet", "spine"]
---

# ⚡ SlotGameSettings Subsystem Impacts

## 1. Cross-Subsystem Impacts Matrix

| Subsystem Component | Read Property | Impact when Turbo Active | Impact when FTR Active |
| :--- | :--- | :--- | :--- |
| **`SlotTableModule`** | `isTurboActive`, `isFastToResult` | Reel deceleration distance and time cut in half. | Reels snap to stop symbols immediately. |
| **`WalletModule`** | `currentGameState`, `isTrialMode` | Balance increments with shortened roll tween. | Balance sets final amount instantly. |
| **`SlotButtonNormal`**| `currentGameState`, `isJoinGameSuccess` | Spin button displays Turbo speed indicator. | Button transitions smoothly between consecutive spins. |
| **`BaseCutscene`** | `isFastToResult` | Big Win text counter scales at 2x. | Cutscene skips directly to dismiss button. |
| **`SlotSoundPlayerModule`** | `isTurboActive` | Shortened stop SFX intervals. | Rapid overlapping stop audio muted. |
