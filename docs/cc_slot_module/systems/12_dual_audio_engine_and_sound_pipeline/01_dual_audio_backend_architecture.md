---
id: "cc_slot_module:systems:dual_audio_engine:dual_backend"
title: "Dual Audio Backend Architecture (Howler vs Cocos)"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "audio_backend", "howler", "cocos_sound", "sound_driver"]
---

# 🎵 Dual Audio Backend Architecture (Howler vs Cocos)

---

## 1. Dual Backend Selection
`SoundPlayerModuleImpl` automatically selects the optimal sound driver at startup:
- **Web Browser (`isWebSound = true`)**: `eno.HowlerSoundPlayer` utilizes WebAudio nodes for polyphonic audio mixing with microsecond accuracy.
- **Native Android / iOS App**: `eno.CocosSoundPlayer` leverages Cocos Creator's native audio engine for direct hardware buffer playback.
