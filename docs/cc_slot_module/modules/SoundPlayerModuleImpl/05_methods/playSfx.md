---
id: "cc_slot_module:SoundPlayerModuleImpl:methods:playSfx"
title: "SoundPlayerModuleImpl.playSfx Method"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "methods", "playSfx"]
---

# 📖 `SoundPlayerModuleImpl.playSfx()`

---

## 1. Complete Source Code Implementation

```typescript
playSfx(sfx: string, loop = false, volume?: number): cc.AudioSource | HowlerDataModule | null {
    volume = (!this.isEnableSFX || this.isMuteEffect) ? 0 : (volume || this.sfxVolume);
    log(`[SoundPlayerImpl] Play sfx ${sfx}`);
    return this._soundPlayer.playSfx(sfx, loop, volume);
}
```
