---
id: "cc_slot_module:SlotSoundPlayerModule:recipe:dynamic_pitch_sfx"
title: "Recipe: Dynamic Pitch Acceleration During Coin Count-Up"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "recipes", "pitch_shift", "rate", "audio", "Howler"]
---

# 💡 Recipe: Dynamic Pitch Acceleration During Coin Count-Up

## 1. Concrete Production Use-Case

When presenting large win count-ups (Level 3 Big Win / Level 4 Super Win), the coin ticker sound accelerates in pitch as the numbers climb toward the target payout:

```typescript
// Inside PaylineInfoModule / WinEffectModule:
async playAcceleratingCoinCountUp(targetAmount: number, duration: number): Promise<void> {
    this.soundPlayer.playSfx("SFX_COIN_COUNT_LOOP", true);

    const startTime = Date.now();
    const interval = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1.0);
        
        // Scale pitch rate from 1.0x to 1.6x
        const currentRate = 1.0 + (progress * 0.6);
        this.soundPlayer.playSfx("SFX_COIN_TICK", false, currentRate);

        if (progress >= 1.0) {
            clearInterval(interval);
            this.soundPlayer.stopSfx("SFX_COIN_COUNT_LOOP");
            this.soundPlayer.playSfx("SFX_COIN_COUNT_END");
        }
    }, 100);
}
```
