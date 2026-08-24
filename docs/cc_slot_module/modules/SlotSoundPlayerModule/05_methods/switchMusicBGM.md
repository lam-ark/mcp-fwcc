---
id: "cc_slot_module:SlotSoundPlayerModule:method:switchMusicBGM"
title: "SlotSoundPlayerModule.switchMusicBGM() Method Specification"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "method", "switchMusicBGM", "crossfade", "audio", "bgm"]
---

# `SlotSoundPlayerModule.switchMusicBGM(): void`

---

## 1. Method Signature
```typescript
public switchMusicBGM(
    nextGameMode: number,
    sfxTransition: string = "",
    fadeTime: number = 0.2,
    delaySwitch: number = 0
): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. If music is enabled and unmuted, calls `this.fadeMusicTo(fadeTime, 0)` to fade out current BGM.
2. If `sfxTransition` is provided, plays transition stinger SFX via `this.playSfx(sfxTransition)`.
3. Cancels any active previous crossfade tween: `this._tweenSwitchMusicBGM && this._tweenSwitchMusicBGM.stop()`.
4. Creates and runs a new Cocos `tween(this.node)`:
   * Waits `delaySwitch` seconds.
   * Calls `this.playMainBGM(nextGameMode)`.
   * Calls `this.fadeMusicTo(fadeTime, this.musicVolume)` to restore volume.

---

## 3. Un-truncated Source Code Implementation
```typescript
switchMusicBGM(nextGameMode: number, sfxTransition: string = "", fadeTime: number = 0.2, delaySwitch: number = 0): void {
    if (!this.isMuteMusic && this.isEnableBGM) {
        this.fadeMusicTo(fadeTime, 0);
    }

    if (sfxTransition) {
        this._sfxTransition = sfxTransition;
        this.playSfx(this._sfxTransition);
    }

    this._tweenSwitchMusicBGM && this._tweenSwitchMusicBGM.stop();
    this._tweenSwitchMusicBGM = tween(this.node)
        .delay(delaySwitch)
        .call(() => {
            this.playMainBGM(nextGameMode);

            if (!this.isMuteMusic && this.isEnableBGM) {
                this.fadeMusicTo(fadeTime, this.musicVolume);
            }
        });

    this._tweenSwitchMusicBGM.start();
}
```
