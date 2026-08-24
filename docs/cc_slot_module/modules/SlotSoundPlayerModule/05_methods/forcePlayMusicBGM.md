---
id: "cc_slot_module:SlotSoundPlayerModule:method:forcePlayMusicBGM"
title: "SlotSoundPlayerModule.forcePlayMusicBGM() Method Specification"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "method", "forcePlayMusicBGM", "audio", "emergency_stop"]
---

# `SlotSoundPlayerModule.forcePlayMusicBGM(gameMode?: number): void`

---

## 1. Method Signature
```typescript
public forcePlayMusicBGM(gameMode?: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Cancels active crossfade tween: `this._tweenSwitchMusicBGM && this._tweenSwitchMusicBGM.stop()`.
2. Stops any playing transition stinger SFX: `this.stopSfx(this._sfxTransition)`.
3. Instantly restores volume to `this.musicVolume` via `this.fadeMusicTo(0, this.musicVolume)`.
4. Starts the requested mode BGM: `this.playMainBGM(gameMode)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
forcePlayMusicBGM(gameMode?: number): void {
    this._tweenSwitchMusicBGM && this._tweenSwitchMusicBGM.stop();
    this.stopSfx(this._sfxTransition);

    if (!this.isMuteMusic && this.isEnableBGM) {
        this.fadeMusicTo(0, this.musicVolume);
    }

    this.playMainBGM(gameMode);
}
```
