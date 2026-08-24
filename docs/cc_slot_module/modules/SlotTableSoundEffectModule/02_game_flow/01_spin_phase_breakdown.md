---
id: "cc_slot_module:SlotTableSoundEffectModule:game_flow:spin_phase_breakdown"
title: "SlotTableSoundEffectModule Spin Phase Audio Breakdown"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 SlotTableSoundEffectModule Spin Phase Audio Breakdown

---

## 1. Phase Breakdown Across Spin Loop

1. **Spin Start**: `REEL_START_SOUND` is received, resetting internal counters `countScatter = 0`, `countBonus = 0`, and `countJackpot = 0`.
2. **Reel Spinning**: Silent while reel loop SFX is managed by `SlotTableModule` / `SlotSoundPlayerModule`.
3. **Reel Landing**: `REEL_STOP_SOUND` inspects column symbols. If a special symbol lands, plays escalating ladder SFX (`SCATTER_1` .. `SCATTER_5`); otherwise plays standard click (`REEL_STOP`).
4. **Fast-To-Result & Turbo Compression**: In Turbo mode or FTR, all intermediate stop clicks are suppressed; only reel index $N-1$ plays `REEL_STOP`.
5. **Win Settlement**: Audio transitions to payline celebratory audio or Big Win cutscene choreography.
