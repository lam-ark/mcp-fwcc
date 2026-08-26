---
id: "cc_slot_mechanics:StickySymbolModule:events:mapping"
title: "StickySymbolModule Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `StickySymbolModule` Event Bus Mapping & Subscriptions

---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`STICKY_LOCK_APPLIED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for STICKY_LOCK_APPLIED. |
| **`STICKY_UNLOCK_ALL`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for STICKY_UNLOCK_ALL. |
| **`RESPIN_RETAIN_SYMBOLS`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for RESPIN_RETAIN_SYMBOLS. |
