---
id: "cc_slot_mechanics:CollectionItemModule:api:properties"
title: "CollectionItemModule Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `CollectionItemModule` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`item`** | `cc.Prefab` | Inspector property in `CollectionItemModule` managing runtime item. |
| **`holder`** | `cc.Node` | Inspector property in `CollectionItemModule` managing runtime holder. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
