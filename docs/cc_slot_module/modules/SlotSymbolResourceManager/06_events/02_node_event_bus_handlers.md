---
id: "cc_slot_module:SlotSymbolResourceManager:events:node_event_handlers"
title: "SlotSymbolResourceManager Local Node Event Bus Handlers"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "events", "node_events"]
---

# 🔔 SlotSymbolResourceManager Local Node Event Bus Handlers

---

## 1. Node Event Registry

`SlotSymbolResourceManager` relies purely on direct component linkage (`getComponent(SlotSymbolResourceManager)`) on the local node. No node event handlers are registered to maintain zero overhead in memory-constrained mobile environments.
