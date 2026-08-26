---
id: "cc_slot_module:SoundPlayerModuleImpl:properties:runtime_state_variables"
title: "SoundPlayerModuleImpl Runtime State Variables"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SoundPlayerModuleImpl Runtime State Variables

| Field | Type | Purpose |
| :--- | :--- | :--- |
| **`isEnableBGM`** | `boolean` | Persistent BGM enabled flag |
| **`isEnableSFX`** | `boolean` | Persistent SFX enabled flag |
| **`isWebSound`** | `boolean` | True if running in browser with Howler.js |
| **`_soundPlayer`** | `any` | Active sound driver instance |
| **`_hasAudioContext`** | `boolean` | Indicates if WebAudio AudioContext is in running state |
