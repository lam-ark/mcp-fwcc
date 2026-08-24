---
id: "cc_slot_module:SlotTableNearWinModule:events:global_event_bus"
title: "SlotTableNearWinModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 SlotTableNearWinModule Global Event Bus Integration

---

## 1. Global Event Bus Architectural Boundary

`SlotTableNearWinModule` does not listen directly to global `eventManager` events. Instead, `SlotTableModule` encapsulates table events and delegates near-win triggers through local `this.node` events (`SETUP_NEARWIN`, `RESET_NEARWIN`).
