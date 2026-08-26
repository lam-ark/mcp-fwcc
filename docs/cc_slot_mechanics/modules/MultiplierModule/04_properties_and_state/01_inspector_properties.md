---
id: "cc_slot_mechanics:MultiplierModule:api:properties"
title: "MultiplierModule Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `MultiplierModule` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`lbMultiplier`** | `cc.Label` | Inspector property in `MultiplierModule` managing runtime lbMultiplier. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
