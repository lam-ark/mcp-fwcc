---
id: "cc_slot_module:SlotSoundPlayerModule:methods:index"
title: "SlotSoundPlayerModule Methods Index"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "methods", "api", "index"]
---

# 🚀 SlotSoundPlayerModule Methods Index

## 1. Master Method Index

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`playMainBGM(currentGameMode?): void`](./playMainBGM.md)** | `public` | Starts background music for Normal (`BGM_MAIN`), Free (`BGM_FREE`), or Bonus (`BGM_BONUS`) mode. |
| **[`switchMusicBGM(nextMode, sfxTransition, fadeTime, delaySwitch): void`](./switchMusicBGM.md)** | `public` | Executes smooth volume fade-out, plays stinger SFX, delays, and fades in next mode BGM. |
| **[`forcePlayMusicBGM(gameMode?): void`](./forcePlayMusicBGM.md)** | `public` | Aborts ongoing crossfades, stops transition SFX, and forces immediate BGM playback. |
| **[`playSfx(soundId, isLoop?, rate?): void`](./playSfx.md)** | `public` | Plays a sound effect with optional looping and dynamic playback rate / pitch. |
