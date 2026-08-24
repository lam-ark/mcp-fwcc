---
id: "cc_slot_module:SlotTableSoundEffectModule:method:onReelStartSound"
title: "SlotTableSoundEffectModule.onReelStartSound Method"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "methods", "onReelStartSound"]
---

# 🚀 `SlotTableSoundEffectModule.onReelStartSound(): void`

---

## 1. Method Signature

```typescript
public onReelStartSound(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Triggered via `this.node.emit('REEL_START_SOUND')` by `SlotTableModule` at the beginning of each reel spin loop.

---

## 3. Algorithmic Steps

Resets `countBonus = 0`, `countScatter = 0`, and `countJackpot = 0`.

---

## 4. Full Source Code

```typescript
onReelStartSound(): void {
    this.countBonus = 0;
    this.countScatter = 0;
    this.countJackpot = 0;
}
```
