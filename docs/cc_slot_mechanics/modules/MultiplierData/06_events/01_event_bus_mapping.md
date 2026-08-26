---
id: "cc_slot_mechanics:MultiplierData:events:mapping"
title: "MultiplierData Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["MultiplierData", "multiplier_data", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `MultiplierData` Event Bus Mapping & Subscriptions

---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`APPLY_MULTIPLIER_TO_WIN_AMOUNT`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for APPLY_MULTIPLIER_TO_WIN_AMOUNT. |
| **`RESET_MULTIPLIER`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for RESET_MULTIPLIER. |
| **`SYNC_GAME_MULTIPLIER`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for SYNC_GAME_MULTIPLIER. |
