---
id: "cc_slot_module:SlotTableSoundEffectModule:overview:architecture_and_role"
title: "SlotTableSoundEffectModule Architecture & Role"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "overview", "architecture", "audio"]
---

# 🎵 SlotTableSoundEffectModule Architecture & Role

---

## 1. Architectural Purpose

`SlotTableSoundEffectModule` (`assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableSoundEffectModule.ts`) manages table-level audio choreography during the spin lifecycle.

It acts as the intelligent sound trigger layer for:
- Standard reel stop sound effects (`REEL_STOP`).
- Escalating special symbol landing audio ladders (`SCATTER_1` .. `SCATTER_5`, `BONUS_1` .. `BONUS_5`, `JACKPOT_1` .. `JACKPOT_5`).
- Fast-To-Result (FTR) and Turbo mode audio compression (only playing reel stop on the final column).

```mermaid
graph TD
    Table[SlotTableModule] -->|REEL_START_SOUND| SoundMod[SlotTableSoundEffectModule]
    SoundMod -->|Resets Scatter/Bonus/JP counters| Counts[Counters = 0]
    Table -->|REEL_STOP_SOUND reelIndex, matrix| SoundMod
    SoundMod -->|Checks Special Symbols| Logic{Has Special?}
    Logic -->|Yes & !Turbo| Ladder[Play SFX Ladder: SCATTER_N]
    Logic -->|No / Normal| Normal[Play SFX: REEL_STOP]
    SoundMod -->|Routes to Injected Player| Player[SlotSoundPlayerModule.playSfx]
```

---

## 2. Core Responsibilities

1. **Reel Start Audio Reset**: Resets Scatter, Bonus, and Jackpot appearance counters upon `REEL_START_SOUND`.
2. **Matrix Symbol Parsing**: Inspects landing symbols on stopped reel columns against `TableModuleConfig`.
3. **Escalating Sound Ladders**: Plays ascending musical pitches/tensions as subsequent Scatter/Bonus symbols land across reels.
4. **Turbo / FTR Suppression**: Compresses reel stop sounds to avoid cacophony during high-speed auto spins.
