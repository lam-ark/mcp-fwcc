---
id: "cc_slot_module:SlotTableSoundEffectModule:method:playSfxReelStop"
title: "SlotTableSoundEffectModule.playSfxReelStop Method"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "methods", "playSfxReelStop"]
---

# 🚀 `SlotTableSoundEffectModule.playSfxReelStop(): void`

---

## 1. Method Signature

```typescript
public playSfxReelStop(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `onReelStopSound()` when a standard non-special column stops.

---

## 3. Algorithmic Steps

Dispatches SFX play command for `this.sfxReelStopId` to `this.soundPlayer`.

---

## 4. Full Source Code

```typescript
playSfxReelStop(): void {
    this.soundPlayer.playSfx(this.sfxReelStopId);
}
```
