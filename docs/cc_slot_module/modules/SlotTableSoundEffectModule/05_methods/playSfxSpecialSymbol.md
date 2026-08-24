---
id: "cc_slot_module:SlotTableSoundEffectModule:method:playSfxSpecialSymbol"
title: "SlotTableSoundEffectModule.playSfxSpecialSymbol Method"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "methods", "playSfxSpecialSymbol"]
---

# 🚀 `SlotTableSoundEffectModule.playSfxSpecialSymbol(flags): void`

---

## 1. Method Signature

```typescript
public playSfxSpecialSymbol({ hasSpecialBonus, hasSpecialScatter, hasSpecialJackpot }: {
    hasSpecialBonus: boolean;
    hasSpecialScatter: boolean;
    hasSpecialJackpot: boolean;
}): void
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `onReelStopSound()` when a column containing Scatter, Bonus, or Jackpot symbols lands.

---

## 3. Algorithmic Steps

1. If `hasSpecialJackpot` is true, plays `this.sfxJackpotIds[this.countJackpot - 1]`.
2. Else if `hasSpecialBonus` is true, plays `this.sfxBonusIds[this.countBonus - 1]`.
3. Else if `hasSpecialScatter` is true, plays `this.sfxScatterIds[this.countScatter - 1]`.

---

## 4. Full Source Code

```typescript
playSfxSpecialSymbol({ hasSpecialBonus, hasSpecialScatter, hasSpecialJackpot }): void {
    if (hasSpecialJackpot) {
        this.soundPlayer.playSfx(this.sfxJackpotIds[this.countJackpot - 1]);
    } else if (hasSpecialBonus) {
        this.soundPlayer.playSfx(this.sfxBonusIds[this.countBonus - 1]);
    } else if (hasSpecialScatter) {
        this.soundPlayer.playSfx(this.sfxScatterIds[this.countScatter - 1]);
    }
}
```
