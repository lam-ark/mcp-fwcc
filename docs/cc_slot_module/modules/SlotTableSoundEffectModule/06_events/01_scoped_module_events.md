---
id: "cc_slot_module:SlotTableSoundEffectModule:events:scoped_module_events"
title: "SlotTableSoundEffectModule Scoped Node Events"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 SlotTableSoundEffectModule Scoped Node Events

---

## 1. Node Event Subscriptions

| Event Name | Source | Handler | Purpose |
| :--- | :--- | :--- | :--- |
| `REEL_START_SOUND` | `SlotTableModule` | `onReelStartSound` | Resets special symbol counters prior to reel rolling. |
| `REEL_STOP_SOUND` | `SlotTableModule` | `onReelStopSound` | Evaluates stopped column symbols and triggers SFX. |
