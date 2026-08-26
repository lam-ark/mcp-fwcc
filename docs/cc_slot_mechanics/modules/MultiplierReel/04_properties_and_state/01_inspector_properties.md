---
id: "cc_slot_mechanics:MultiplierReel:api:properties"
title: "MultiplierReel Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["MultiplierReel", "multiplier_reel", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `MultiplierReel` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`lbMultiplier`** | `cc.Label` | Inspector property in `MultiplierReel` managing runtime lbMultiplier. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
