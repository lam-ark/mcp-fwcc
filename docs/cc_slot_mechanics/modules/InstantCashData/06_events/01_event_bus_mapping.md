---
id: "cc_slot_mechanics:InstantCashData:events:mapping"
title: "InstantCashData Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["InstantCashData", "instant_cash_data", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `InstantCashData` Event Bus Mapping & Subscriptions

---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`INSTANT_CASH_COLLECTED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for INSTANT_CASH_COLLECTED. |
| **`RESET_RESPIN_COUNT`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for RESET_RESPIN_COUNT. |
| **`SETTLE_JACKPOT_PRIZE`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for SETTLE_JACKPOT_PRIZE. |
