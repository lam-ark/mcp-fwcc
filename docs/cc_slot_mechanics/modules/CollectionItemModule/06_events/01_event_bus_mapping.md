---
id: "cc_slot_mechanics:CollectionItemModule:events:mapping"
title: "CollectionItemModule Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `CollectionItemModule` Event Bus Mapping & Subscriptions

---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`COLLECT_SCATTER`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for COLLECT_SCATTER. |
| **`COLLECTION_TARGET_REACHED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for COLLECTION_TARGET_REACHED. |
