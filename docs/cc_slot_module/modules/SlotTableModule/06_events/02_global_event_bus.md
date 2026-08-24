---
id: "cc_slot_module:SlotTableModule:events:global_event_bus"
title: "SlotTableModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 SlotTableModule Global Event Bus Integration

## 1. Global Events Summary

`SlotTableModule` communicates with its director via `moduleEvent` and coordinates with local child components (`NearWin`, `SoundEffect`) via `this.node` events. It does not subscribe directly to `eventManager` to preserve modularity.
