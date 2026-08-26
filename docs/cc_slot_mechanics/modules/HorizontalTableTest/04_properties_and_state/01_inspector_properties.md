---
id: "cc_slot_mechanics:HorizontalTableTest:api:properties"
title: "HorizontalTableTest Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["HorizontalTableTest", "horizontal_table_test", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `HorizontalTableTest` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`table`** | `HorizontalTableModule` | Inspector property in `HorizontalTableTest` managing runtime table. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
