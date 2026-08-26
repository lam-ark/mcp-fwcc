---
id: "cc_slot_mechanics:CascadeWildGenerationSceneTest:api:properties"
title: "CascadeWildGenerationSceneTest Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationSceneTest", "cascade_wild_generation_scene_test", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `CascadeWildGenerationSceneTest` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`table`** | `SlotTableModule` | Inspector property in `CascadeWildGenerationSceneTest` managing runtime table. |
| **`cascadeModule`** | `CascadeWildGenerationModule` | Inspector property in `CascadeWildGenerationSceneTest` managing runtime cascadeModule. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
