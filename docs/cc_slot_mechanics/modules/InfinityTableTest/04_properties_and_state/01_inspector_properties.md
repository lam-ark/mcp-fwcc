---
id: "cc_slot_mechanics:InfinityTableTest:api:properties"
title: "InfinityTableTest Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `InfinityTableTest` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`table`** | `InfinityTableModule` | Inspector property in `InfinityTableTest` managing runtime table. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
