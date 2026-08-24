---
id: "cc_slot_module:SlotSoundPlayerModule:properties:inspector_properties"
title: "SlotSoundPlayerModule Inspector Properties & Audio Database Schema"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "properties", "inspector", "audio", "musicList", "sfxList"]
---

# 🎛️ SlotSoundPlayerModule Inspector Properties & Audio Database Schema

Mounted at `Canvas/Director/SlotSound`, `SlotSoundPlayerModule` exposes the following Inspector properties in Cocos Creator:

---

## 1. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Purpose & Usage |
| :--- | :--- | :--- | :--- |
| **`musicList`** | `CustomAudioClipModule[]` | `[]` | Array of BGM track items mapping `soundId` (e.g. `BGM_MAIN`, `BGM_FREE`, `BGM_BONUS`) to `cc.AudioClip` assets. |
| **`sfxList`** | `CustomAudioClipModule[]` | `[]` | Array of SFX clip items mapping `soundId` (e.g. `BTN_SPIN`, `REEL_STOP`, `WIN_BIG`) to `cc.AudioClip` assets. |
| **`userGestureNode`** | `cc.Node` | `null` | Fullscreen transparent overlay node used to capture the first touch gesture on mobile browsers to unlock WebAudio playback. |
| **`musicVolume`** | `number` | `1.0` | Master background music volume level (`0.0` to `1.0`). |
| **`sfxVolume`** | `number` | `1.0` | Master sound effects volume level (`0.0` to `1.0`). |
| **`isDebug`** | `boolean` | `false` | If `true`, logs loaded audio IDs to the console during `onLoad()`. |
| **`sfxClickId`** | `string` | `"BTN_GENERAL"` | Default SFX identifier triggered when clicking UI buttons. |
| **`storageKeyBGM`** | `string` | `"enableBackgroundMusic"` | LocalStorage key for persisting BGM toggle state. |
| **`storageKeySFX`** | `string` | `"enableSound"` | LocalStorage key for persisting SFX toggle state. |

---

## 2. Audio Item Data Structure (`CustomAudioClipModule`)

```typescript
export class CustomAudioClipModule {
    soundId: string = "";      // Key identifier queried by playMusic() and playSfx()
    audioFile: cc.AudioClip;   // Bound audio asset in Cocos Creator
}
```
