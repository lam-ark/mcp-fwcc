---
id: "cc_slot_module:SoundPlayerModuleImpl:methods:methods_index"
title: "SoundPlayerModuleImpl Methods Master Index"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "methods", "index"]
---

# 📖 SoundPlayerModuleImpl Methods Master Index

| Method | Scope | Description |
| :--- | :--- | :--- |
| **`onLoad()`** | `void` | Initializes driver, registers game visibility hooks, and begins preload. |
| **`playMusic(id, loop, volume)`** | `CustomAudioClipModule` | Plays background music track by sound ID. |
| **`changeMusic(id, loop, vol, mix)`** | `CustomAudioClipModule` | Crossfades to a new music track over `mixTime` duration. |
| **`stopMusic()`** | `void` | Stops current BGM playback. |
| **`playSfx(sfx, loop, volume)`** | `any` | Plays sound effect by sound ID. |
| **`stopSfx(sfx)`** | `void` | Stops specific sound effect. |
| **`stopAllEffects()`** | `void` | Halts all active sound effects. |
| **`stopAllAudio()`** | `void` | Halts all music and sound effects. |
| **`setBgmEnable(enable)`** | `void` | Updates and persists BGM toggle state in localStorage. |
| **`setEffectEnable(enable)`** | `void` | Updates and persists SFX toggle state in localStorage. |
| **`fadeMusicTo(dur, vol, cb)`** | `void` | Fades music volume over specified duration. |
| **`fadeSoundTo(id, dur, vol, cb)`**| `void` | Fades specific sound effect volume over duration. |
