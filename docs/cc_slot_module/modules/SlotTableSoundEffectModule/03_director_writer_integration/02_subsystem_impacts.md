---
id: "cc_slot_module:SlotTableSoundEffectModule:director_writer:subsystem_impacts"
title: "SlotTableSoundEffectModule Subsystem Impacts"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SlotTableSoundEffectModule Subsystem Impacts

---

## 1. Cross-Subsystem Interactions

| Subsystem | Trigger / Event | Subsystem Impact |
| :--- | :--- | :--- |
| **`SlotTableModule`** | Emits `REEL_START_SOUND`, `REEL_STOP_SOUND` | Provides stopping context, column index, and matrix state. |
| **`TableModuleConfig`** | Reads `JACKPOT_SYMBOL`, `BONUS_SYMBOL`, `SCATTER_SYMBOL` | Identifies which symbols qualify for escalating sound ladders. |
| **`SlotSoundPlayerModule`** | Invokes `playSfx(sfxId)` | Decodes audio assets and routes audio through WebAudio/Cocos audio engine. |
