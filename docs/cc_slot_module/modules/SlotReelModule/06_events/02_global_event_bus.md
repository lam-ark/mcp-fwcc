---
id: "cc_slot_module:SlotReelModule:events:global_event_bus"
title: "SlotReelModule Global Event Bus Interaction"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "events", "global_events", "eventManager"]
---

# 🌐 SlotReelModule Global Event Bus Interaction

---

## 1. Architectural Role & Event Isolation

To maximize rendering performance (maintaining 60 FPS across all mobile devices), `SlotReelModule` does **not** directly bind to the global `GameEventManager`.

Instead, all cross-subsystem event communications (such as audio triggers, wallet updates, or big win notifications) are coordinated upstream by the parent `SlotTableModule` and `GameModeDirectorModule`.
