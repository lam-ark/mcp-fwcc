---
id: "cc_slot_module:SlotSoundPlayerModule:method:playSfx"
title: "SlotSoundPlayerModule.playSfx() Method Specification"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "method", "playSfx", "sfx", "audio"]
---

# `SlotSoundPlayerModule.playSfx(soundId: string, isLoop?: boolean, rate?: number): void`

---

## 1. Method Signature
```typescript
public playSfx(soundId: string, isLoop: boolean = false, rate: number = 1): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks if sound is enabled (`this.isEnableSFX`) and not muted (`!this.isMuteEffect`).
2. Dispatches play request to internal `this._soundPlayer.playSfx(soundId, isLoop, rate)`.
3. If WebAudio (Howler) is active, applies pitch shift according to `rate` (e.g. accelerating win count-up audio pitches).

---

## 3. Un-truncated Source Code Implementation (inherited from `SoundPlayerModuleImpl`)
```typescript
playSfx(soundId: string, isLoop: boolean = false, rate: number = 1): void {
    if (!this.isEnableSFX || this.isMuteEffect) {
        return;
    }
    this._soundPlayer && this._soundPlayer.playSfx(soundId, isLoop, rate);
}
```
