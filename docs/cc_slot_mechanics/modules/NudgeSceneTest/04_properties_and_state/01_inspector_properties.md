---
id: "cc_slot_mechanics:NudgeSceneTest:api:properties"
title: "NudgeSceneTest Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["NudgeSceneTest", "nudge_scene_test", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `NudgeSceneTest` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`table`** | `NudgeTableModule` | Inspector property in `NudgeSceneTest` managing runtime table. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
