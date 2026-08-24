---
id: "cc_slot_module:SlotSoundPlayerModule:method:playMainBGM"
title: "SlotSoundPlayerModule.playMainBGM() Method Specification"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "method", "playMainBGM", "bgm", "audio"]
---

# `SlotSoundPlayerModule.playMainBGM(currentGameMode?: number): void`

---

## 1. Method Signature
```typescript
public playMainBGM(currentGameMode?: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Maps `currentGameMode` to appropriate BGM sound token:
   * `FREE_GAME` (`2`) ➔ `"BGM_FREE"`.
   * `BONUS_GAME` (`4`) ➔ `"BGM_BONUS"`.
   * Default / `NORMAL_GAME` (`1`) ➔ `"BGM_MAIN"`.
2. Calls `this.playMusic(soundId)` to begin audio playback on loop.

---

## 3. Un-truncated Source Code Implementation
```typescript
playMainBGM(currentGameMode?: number): void {
    let soundId = "BGM_MAIN";
    if (currentGameMode === GAME_MODE_ENUM.FREE_GAME) {
        soundId = "BGM_FREE";
    } else if (currentGameMode === GAME_MODE_ENUM.BONUS_GAME) {
        soundId = "BGM_BONUS";
    }

    this.playMusic(soundId);
}
```
