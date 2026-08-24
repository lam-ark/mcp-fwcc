---
id: "cc_slot_module:SlotTablePaylineModule:events:global_event_bus"
title: "SlotTablePaylineModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 SlotTablePaylineModule Global Event Bus Integration

---

## 1. Global Event Bus Isolation

`SlotTablePaylineModule` does not listen directly to global `eventManager` events. It receives its commands strictly through `this.moduleEvent` (`SETUP_PAYLINES`), maintaining clean separation between mode directors and presentation layers.
