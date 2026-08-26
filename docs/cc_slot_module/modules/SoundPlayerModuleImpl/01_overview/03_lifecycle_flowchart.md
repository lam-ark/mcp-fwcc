---
id: "cc_slot_module:SoundPlayerModuleImpl:overview:lifecycle_flowchart"
title: "SoundPlayerModuleImpl Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 SoundPlayerModuleImpl Lifecycle Flowchart

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Audio as SoundPlayerModuleImpl
    participant Driver as eno.HowlerSoundPlayer / CocosSoundPlayer
    participant User as Mobile Touch

    Engine->>Audio: onLoad()
    Audio->>Audio: loadCacheConfig() (localStorage BGM/SFX)
    Audio->>Driver: init(musicList, sfxList, node)
    alt isWebSound
        Audio->>Driver: loadMusicList & loadSfxList
        opt AudioContext not running
            Audio->>Audio: _waitForUserGesture()
            User->>Audio: TOUCH_START
            Audio->>Audio: _resumeContextGesture()
            Audio->>Driver: resumeWithGesture()
        end
        Audio->>Audio: playMainBGM()
    end
    Engine->>Audio: onDestroy()
    Audio->>Driver: onDestroy()
```
