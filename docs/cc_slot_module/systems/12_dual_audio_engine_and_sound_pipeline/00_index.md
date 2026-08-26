---
id: "cc_slot_module:systems:dual_audio_engine:index"
title: "Dual Audio Engine & Sound Pipeline Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "audio_engine", "sound_player", "howler", "cocos_sound", "web_audio", "index"]
---

# 🔊 Dual Audio Engine & Sound Pipeline Architecture Index

---

## 1. Subsystem Mission

The **Dual Audio Engine & Sound Pipeline Subsystem** delivers seamless, zero-latency audio choreography across desktop browsers, mobile web, and native mobile apps. It abstracts underlying platform sound drivers into a unified API supporting BGM ducking, reel spin loops, near-win anticipation tension, coin count-up rollups, and dynamic sound bank loading.

```mermaid
graph TD
    SoundCmd[Sound Commands: playMusic, playSfx, fadeMusicTo] --> SPM[SoundPlayerModuleImpl]
    SPM --> DriverSelect{sys.isBrowser && Howl?}
    
    DriverSelect -- Web Audio --> HowlerDriver[eno.HowlerSoundPlayer]
    DriverSelect -- Native App --> CocosDriver[eno.CocosSoundPlayer]
    
    HowlerDriver --> Unlock[iOS / Mobile Gesture Interceptor]
    HowlerDriver --> WebContext[WebAudio AudioContext]
    CocosDriver --> NativeEngine[Cocos AudioEngine]
    
    SPM --> DynBank[SET_UP_AUDIO_DATABASE: Dynamic Sound Banks]
    SPM --> Visibility[EVENT_HIDE / EVENT_SHOW Auto Mute]
```

---

## 2. Topic Breakdown & Navigation

1. **[`01_dual_audio_backend_architecture.md`](./01_dual_audio_backend_architecture.md)**
   - Dual driver architecture: `eno.HowlerSoundPlayer` (WebAudio API) vs `eno.CocosSoundPlayer` (Native AudioEngine).
2. **[`02_mobile_browser_audiocontext_unlock.md`](./02_mobile_browser_audiocontext_unlock.md)**
   - Overcoming iOS Safari and Mobile Chrome autoplay restrictions via first-touch user gesture interception and context suspension/resumption.
3. **[`03_dynamic_sound_bank_loading.md`](./03_dynamic_sound_bank_loading.md)**
   - Dynamic audio asset loading via `SET_UP_AUDIO_DATABASE` and memory release via `assetManager.releaseAsset()`.
4. **[`04_sound_convert_list_and_volume_fading.md`](./04_sound_convert_list_and_volume_fading.md)**
   - Logical sound IDs (`SoundConvertList`), smooth volume fading, crossfades (`mixTime`), and one-shot polyphony management.
