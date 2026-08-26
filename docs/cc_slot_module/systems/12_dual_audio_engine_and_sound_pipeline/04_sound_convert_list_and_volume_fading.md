---
id: "cc_slot_module:systems:dual_audio_engine:sound_convert_list"
title: "SoundConvertList, Volume Fading & Choreography"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "sound_convert_list", "volume_fading", "crossfade", "audio_choreography"]
---

# 🎚️ SoundConvertList, Volume Fading & Choreography

---

## 1. Logical Sound ID Mapping (`SoundConvertList`)
Game directors and writers invoke abstract sound IDs (e.g. `"SPIN"`, `"WIN_LINE"`, `"SCATTER_STOP"`). `SoundConvertList` maps these logical tokens to specific audio asset paths across different themes.

## 2. Dynamic Volume Fading & Crossfades
- **`fadeMusicTo(duration, volume, onComplete)`**: Smoothly ramps BGM volume down during win celebration fanfare.
- **`changeMusic(id, loop, volume, mixTime)`**: Crossfades between Normal Game BGM and Free Game BGM over `mixTime` seconds.
- **`playSfxOneShot(soundId)`**: Spawns independent concurrent audio instances for rapid multi-line win beeps.
