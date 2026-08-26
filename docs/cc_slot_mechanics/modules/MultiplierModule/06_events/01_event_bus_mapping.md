---
id: "cc_slot_mechanics:MultiplierModule:events:mapping"
title: "MultiplierModule Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `MultiplierModule` Event Bus Mapping & Subscriptions

---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`APPLY_MULTIPLIER_TO_WIN_AMOUNT`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for APPLY_MULTIPLIER_TO_WIN_AMOUNT. |
| **`RESET_MULTIPLIER`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for RESET_MULTIPLIER. |
| **`SYNC_GAME_MULTIPLIER`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for SYNC_GAME_MULTIPLIER. |
