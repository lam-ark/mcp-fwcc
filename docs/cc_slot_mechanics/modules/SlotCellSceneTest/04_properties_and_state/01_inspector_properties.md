---
id: "cc_slot_mechanics:SlotCellSceneTest:api:properties"
title: "SlotCellSceneTest Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["SlotCellSceneTest", "slot_cell_scene_test", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `SlotCellSceneTest` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`table`** | `SlotCellTableModule` | Inspector property in `SlotCellSceneTest` managing runtime table. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
