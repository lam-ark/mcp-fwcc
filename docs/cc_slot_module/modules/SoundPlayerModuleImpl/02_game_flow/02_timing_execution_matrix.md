---
id: "cc_slot_module:SoundPlayerModuleImpl:game_flow:timing_execution_matrix"
title: "SoundPlayerModuleImpl Timing Matrix"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SoundPlayerModuleImpl Timing Matrix

| Phase | Method | Impact |
| :--- | :--- | :--- |
| **Scene Start** | `playMainBGM()` | Starts base game background music loop |
| **Spin Start** | `playSfx("SPIN_START")` | Triggers start sound |
| **Reel Stop** | `playSfx("REEL_STOP")` | Plays reel stopping latch effect |
| **Win Celebration** | `playMusic("WIN_BIG")` | Crossfades to win music track |
| **Fast Stop / FTR** | `stopAllEffects()` | Halts all active sound effects instantly |
