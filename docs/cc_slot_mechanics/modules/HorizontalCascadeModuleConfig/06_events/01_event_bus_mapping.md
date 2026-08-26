---
id: "cc_slot_mechanics:HorizontalCascadeModuleConfig:events:mapping"
title: "HorizontalCascadeModuleConfig Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModuleConfig", "horizontal_cascade_module_config", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `HorizontalCascadeModuleConfig` Event Bus Mapping & Subscriptions

---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`TABLE_START_RESPIN`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for TABLE_START_RESPIN. |
| **`CASCADE_DROP_COMPLETED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for CASCADE_DROP_COMPLETED. |
| **`DISAPPEAR_ANIM_END`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for DISAPPEAR_ANIM_END. |
