---
id: "cc_slot_mechanics:CollectionItemData:events:mapping"
title: "CollectionItemData Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["CollectionItemData", "collection_item_data", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `CollectionItemData` Event Bus Mapping & Subscriptions

---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`COLLECT_SCATTER`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for COLLECT_SCATTER. |
| **`COLLECTION_TARGET_REACHED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for COLLECTION_TARGET_REACHED. |
