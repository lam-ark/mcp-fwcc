---
id: "cc_slot_mechanics:MegawayModule:events:mapping"
title: "MegawayModule Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `MegawayModule` Event Bus Mapping & Subscriptions

---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`UPDATE_MEGAWAY`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for UPDATE_MEGAWAY. |
| **`REEL_STOPPED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for REEL_STOPPED. |
| **`RESET_MEGAWAY`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for RESET_MEGAWAY. |
