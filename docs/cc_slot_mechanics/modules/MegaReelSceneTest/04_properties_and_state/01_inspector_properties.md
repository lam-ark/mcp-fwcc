---
id: "cc_slot_mechanics:MegaReelSceneTest:api:properties"
title: "MegaReelSceneTest Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["MegaReelSceneTest", "mega_reel_scene_test", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `MegaReelSceneTest` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`table`** | `SlotTableMegaModule` | Inspector property in `MegaReelSceneTest` managing runtime table. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
