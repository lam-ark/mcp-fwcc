---
id: "cc_slot_module:SlotTableSoundEffectModule:properties:injected_services"
title: "SlotTableSoundEffectModule Injected Services"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "properties", "injected_services", "ioc"]
---

# 💉 SlotTableSoundEffectModule Injected Services

---

## 1. Injected Services Matrix

`SlotTableSoundEffectModule` inherits injected services from `SlotBaseModule`:

| Token | Type | When Provided | Purpose in Module |
| :--- | :--- | :--- | :--- |
| `soundPlayer` | `SlotSoundPlayerModule` | Bootstrap (`GameInit`) | Executes `playSfx(sfxId)` for all reel and special symbol landing sounds. |
| `gameConfig` | `GameConfig` | Bootstrap (`GameInit`) | Fallback access to game configuration. |
| `eventManager` | `GameEventManager` | Bootstrap (`GameInit`) | Global event manager. |
| `gameDataStore`| `GameDataStore` | Bootstrap (`GameInit`) | Data store access. |
