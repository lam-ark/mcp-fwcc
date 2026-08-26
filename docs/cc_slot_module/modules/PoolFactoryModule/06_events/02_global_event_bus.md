---
id: "cc_slot_module:PoolFactoryModule:events:global_event_bus"
title: "PoolFactoryModule Global Event Bus Topics"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 PoolFactoryModule Global Event Bus Topics

---

## 1. Global Event Bus Interaction

Subclasses of `PoolFactoryModule` can bind to global cleanup topics such as `RESET_ALL_EFFECT_AND_TASKS` in `onLoadExtend()` to trigger `returnAllObjects()`.
