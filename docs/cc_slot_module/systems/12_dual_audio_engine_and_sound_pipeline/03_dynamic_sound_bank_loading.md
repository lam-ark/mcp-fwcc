---
id: "cc_slot_module:systems:dual_audio_engine:dynamic_sound_banks"
title: "Dynamic Sound Bank Loading & Memory Management"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "dynamic_audio", "sound_bank", "memory_management", "asset_manager"]
---

# 📦 Dynamic Sound Bank Loading & Memory Management

---

## 1. On-Demand Audio Loading
Special feature mini-games (e.g. Free Spins, Wheel of Fortune, Bonus Chest Pick) dynamically load audio clips on demand:
- Listens to `SET_UP_AUDIO_DATABASE` event on `this.node`.
- Registers audio files into the sound driver.
- Releases raw `cc.AudioClip` assets from Cocos `assetManager` once loaded into Howler WebAudio buffers to conserve JavaScript heap memory.
