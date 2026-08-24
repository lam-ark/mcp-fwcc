---
id: "cc_slot_module:SlotTableSoundEffectModule:gotchas:sfx_array_index_out_of_bounds"
title: "Gotcha: SFX Ladder Array Index Out of Bounds"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "gotchas", "index_out_of_bounds"]
---

# 🛑 Gotcha: SFX Ladder Array Index Out of Bounds

---

## 1. Symptom & Technical Defect

When 6 or more Scatters land on an oversized grid (e.g. 6x4 or Megaways), `soundPlayer.playSfx(undefined)` is called, causing console warnings or audio failure.

---

## 2. Root Cause

In `playSfxSpecialSymbol()`:
```typescript
this.soundPlayer.playSfx(this.sfxScatterIds[this.countScatter - 1]);
```
If `sfxScatterIds` has only 5 elements and `countScatter` reaches 6, `this.sfxScatterIds[5]` evaluates to `undefined`.

---

## 3. Standard Code Fix

Clamp the index or fallback to the highest tier audio clip:

```typescript
playSfxSpecialSymbol({ hasSpecialBonus, hasSpecialScatter, hasSpecialJackpot }): void {
    if (hasSpecialJackpot) {
        const idx = Math.min(this.countJackpot - 1, this.sfxJackpotIds.length - 1);
        this.soundPlayer.playSfx(this.sfxJackpotIds[idx]);
    } else if (hasSpecialBonus) {
        const idx = Math.min(this.countBonus - 1, this.sfxBonusIds.length - 1);
        this.soundPlayer.playSfx(this.sfxBonusIds[idx]);
    } else if (hasSpecialScatter) {
        const idx = Math.min(this.countScatter - 1, this.sfxScatterIds.length - 1);
        this.soundPlayer.playSfx(this.sfxScatterIds[idx]);
    }
}
```
