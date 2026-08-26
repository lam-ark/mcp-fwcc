---
id: "cc_slot_mechanics:MultiplierReelModule:api:properties"
title: "MultiplierReelModule Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `MultiplierReelModule` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`prefabMultiplierReel`** | `cc.Prefab` | Inspector property in `MultiplierReelModule` managing runtime prefabMultiplierReel. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
