---
id: "cc_slot_module:SoundPlayerModuleImpl:properties:inspector_properties"
title: "SoundPlayerModuleImpl Inspector Properties"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "properties", "inspector"]
---

# 📋 SoundPlayerModuleImpl Inspector Properties

| Property | Type | Default | Description |
| :--- | :--- | :---: | :--- |
| **`musicList`** | `CustomAudioClipModule[]` | `[]` | List of music tracks and sound IDs. |
| **`sfxList`** | `CustomAudioClipModule[]` | `[]` | List of SFX clips and sound IDs. |
| **`userGestureNode`** | `cc.Node` | `null` | Touch capture node for unlocking audio. |
| **`musicVolume`** | `number` | `1` | Master music volume level ($0.0 	o 1.0$). |
| **`sfxVolume`** | `number` | `1` | Master SFX volume level ($0.0 	o 1.0$). |
| **`sfxClickId`** | `string` | `"BTN_GENERAL"` | Sound ID played for default button clicks. |
| **`storageKeyBGM`** | `string` | `"enableBackgroundMusic"` | localStorage key for BGM toggle. |
| **`storageKeySFX`** | `string` | `"enableSound"` | localStorage key for SFX toggle. |
