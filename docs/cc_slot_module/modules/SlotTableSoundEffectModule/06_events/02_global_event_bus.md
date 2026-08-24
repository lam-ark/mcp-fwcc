---
id: "cc_slot_module:SlotTableSoundEffectModule:events:global_event_bus"
title: "SlotTableSoundEffectModule Global Event Bus Boundary"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 SlotTableSoundEffectModule Global Event Bus Boundary

---

## 1. Global Event Bus Isolation

`SlotTableSoundEffectModule` maintains complete decoupling from global event topics. It relies strictly on local `this.node` events emitted by `SlotTableModule`.
