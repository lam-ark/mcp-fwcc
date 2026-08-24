---
id: "cc_slot_module:SlotSoundPlayerModule:properties:runtime_state_variables"
title: "SlotSoundPlayerModule Runtime State & Audio Engine Bridges"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "properties", "runtime_state", "variables", "HowlerSoundPlayer", "CocosSoundPlayer"]
---

# 💾 SlotSoundPlayerModule Runtime State & Audio Engine Bridges

## 1. Runtime State Variables Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| **`_soundPlayer`** | `eno.HowlerSoundPlayer \| eno.CocosSoundPlayer` | `null` | `onLoad()` | Low-level driver engine. If browser + Howler exists ➔ uses WebAudio; else native Cocos. |
| **`isWebSound`** | `boolean` | `false` | `onLoad()` | Flag indicating whether WebAudio/Howler.js backend is active. |
| **`isEnableBGM`** | `boolean` | `false` | `loadCacheConfig()` | User preference toggle indicating if BGM is enabled in local storage. |
| **`isEnableSFX`** | `boolean` | `false` | `loadCacheConfig()` | User preference toggle indicating if SFX is enabled in local storage. |
| **`_tweenSwitchMusicBGM`** | `cc.Tween \| null` | `null` | `switchMusicBGM()` | Active crossfade tween instance. Stopped and cleaned on abrupt skips or `forcePlayMusicBGM()`. |
| **`_sfxTransition`** | `string` | `""` | `switchMusicBGM()` | ID of the active mode transition stinger SFX clip. |
| **`_hasAudioContext`** | `boolean` | `true` | Mobile unlock | Flag indicating if browser WebAudio `AudioContext` is currently in running state. |
