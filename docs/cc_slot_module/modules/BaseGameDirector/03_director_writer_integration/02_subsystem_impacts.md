---
id: "cc_slot_module:BaseGameDirector:director_writer:subsystem_impacts"
title: "BaseGameDirector Subsystem Coordination Impacts"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "director_writer", "subsystems", "table", "audio", "ui"]
---

# ⚡ BaseGameDirector Subsystem Coordination Impacts

## 1. Cross-Subsystem Impacts Matrix

| Subsystem Component | Triggered by Director Command | Operational Impact |
| :--- | :--- | :--- |
| **`SlotTableModule`** | `START_SPIN` / `STOP_SPIN` | Reels accelerate or begin staggered deceleration stops. |
| **`PaylineModule`** | `SHOW_PAYLINES` | Renders winning payline trails and triggers symbol victory Spine animations. |
| **`UIManagerModule`** | `LOCK_BUTTONS` / `UNLOCK_BUTTONS` | Disables or enables betting steppers and spin buttons. |
| **`WalletModule`** | `UPDATE_WIN_WALLET` | Rolls visual credit balance to match cumulative win amounts. |
| **`SlotSoundPlayerModule`** | `PLAY_BGM` / `CROSSFADE_BGM` | Switches background tracks and triggers win stinger fanfares. |
