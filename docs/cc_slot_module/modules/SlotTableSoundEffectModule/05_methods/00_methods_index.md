---
id: "cc_slot_module:SlotTableSoundEffectModule:methods:index"
title: "SlotTableSoundEffectModule Methods Index"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "methods", "index"]
---

# 📋 SlotTableSoundEffectModule Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`onLoadExtend(): void`](./onLoadExtend.md)** | `public` | Binds `REEL_START_SOUND` and `REEL_STOP_SOUND` event listeners. |
| **[`onReelStartSound(): void`](./onReelStartSound.md)** | `public` | Resets Scatter, Bonus, and Jackpot counters to `0`. |
| **[`onReelStopSound(data): void`](./onReelStopSound.md)** | `public` | Inspects stopped column matrix and determines SFX to trigger. |
| **[`playSfxReelStop(): void`](./playSfxReelStop.md)** | `public` | Triggers standard reel stop click sound. |
| **[`playSfxSpecialSymbol(flags): void`](./playSfxSpecialSymbol.md)** | `public` | Triggers escalating sound ladder based on special symbol type and count. |
