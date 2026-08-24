---
id: "cc_slot_module:SlotSoundPlayerModule:overview:architecture_and_role"
title: "SlotSoundPlayerModule Audio Architecture & Crossfade System"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "overview", "architecture", "audio", "bgm", "crossfade"]
---

# 🏛️ SlotSoundPlayerModule Audio Architecture & Crossfade System

## 1. Executive Summary & Purpose

`SlotSoundPlayerModule` (`assets/cc-common/cc-slot-module/Core/SlotSound/SlotSoundPlayerModule.ts`) is the **Central Audio Controller** of the `cc-common` Slot SDK.

Mounted at `Canvas/Director/SlotSound`, it coordinates background music (BGM) tracks (`BGM_MAIN`, `BGM_FREE`, `BGM_BONUS`), smooth audio crossfading during game mode transitions (`switchMusicBGM`), transition sound effects (stingers), and sound volume persistence.

```mermaid
graph LR
    Director[GameModeDirectorModule] -->|switchMusicBGM(FREE_GAME, 'sfx_intro', 0.2, 0.5)| Sound[SlotSoundPlayerModule<br/>Canvas/Director/SlotSound]
    
    Sound -->|Fade Out (0.2s)| Track1[BGM_MAIN Track]
    Sound -->|Play SFX| Stinger[sfx_intro Stinger]
    Sound -->|Tween Delay (0.5s) & Fade In| Track2[BGM_FREE Track]
```

---

## 2. Core Responsibilities

1. **Mode-Scoped BGM Selection**: Automatically selects track tokens based on `GAME_MODE_ENUM` (`BGM_MAIN`, `BGM_FREE`, `BGM_BONUS`).
2. **Smooth Crossfade Pipeline**: Fades volume to `0`, plays transition stinger SFX, delays for banner animation, and fades next BGM up to `this.musicVolume`.
3. **Emergency Reset (`forcePlayMusicBGM`)**: Stops running tweens and transition stingers on fast mode skips or error recoveries.
