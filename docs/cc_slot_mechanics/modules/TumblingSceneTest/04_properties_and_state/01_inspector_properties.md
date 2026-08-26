---
id: "cc_slot_mechanics:TumblingSceneTest:api:properties"
title: "TumblingSceneTest Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["TumblingSceneTest", "tumbling_scene_test", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `TumblingSceneTest` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`table`** | `SlotTableModule` | Inspector property in `TumblingSceneTest` managing runtime table. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
