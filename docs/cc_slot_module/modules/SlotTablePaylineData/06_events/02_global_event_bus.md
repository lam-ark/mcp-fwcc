---
id: "cc_slot_module:SlotTablePaylineData:events:global_event_bus"
title: "SlotTablePaylineData Global Event Bus Integration"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 SlotTablePaylineData Global Event Bus Integration

---

## 1. Global Event Bus Isolation

`SlotTablePaylineData` synchronizes state directly via `GameDataStore.updateDataModules()` without consuming global event topics.
