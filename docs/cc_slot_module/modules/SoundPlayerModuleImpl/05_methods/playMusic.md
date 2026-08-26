---
id: "cc_slot_module:SoundPlayerModuleImpl:methods:playMusic"
title: "SoundPlayerModuleImpl.playMusic Method"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "methods", "playMusic"]
---

# 📖 `SoundPlayerModuleImpl.playMusic()`

---

## 1. Complete Source Code Implementation

```typescript
playMusic(id: string, loop = true, volume?: number): CustomAudioClipModule | null {
    volume = (this.isMuteMusic || !this.isEnableBGM) ? 0 : volume > 0 ? volume : this.musicVolume;
    log(`[SoundPlayerImpl] Play music ${id}`);
    return this._soundPlayer.playMusic(id, loop, volume);
}
```
