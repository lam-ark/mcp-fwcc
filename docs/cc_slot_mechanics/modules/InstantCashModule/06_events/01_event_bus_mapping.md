---
id: "cc_slot_mechanics:InstantCashModule:events:mapping"
title: "InstantCashModule Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `InstantCashModule` Event Bus Mapping & Subscriptions

---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`INSTANT_CASH_COLLECTED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for INSTANT_CASH_COLLECTED. |
| **`RESET_RESPIN_COUNT`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for RESET_RESPIN_COUNT. |
| **`SETTLE_JACKPOT_PRIZE`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for SETTLE_JACKPOT_PRIZE. |
