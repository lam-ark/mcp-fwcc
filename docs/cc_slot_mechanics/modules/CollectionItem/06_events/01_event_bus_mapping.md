---
id: "cc_slot_mechanics:CollectionItem:events:mapping"
title: "CollectionItem Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `CollectionItem` Event Bus Mapping & Subscriptions

---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`COLLECT_SCATTER`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for COLLECT_SCATTER. |
| **`COLLECTION_TARGET_REACHED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for COLLECTION_TARGET_REACHED. |
