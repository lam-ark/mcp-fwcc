---
id: "cc_slot_mechanics:MegawayModule:api:properties"
title: "MegawayModule Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `MegawayModule` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`lbMegaway`** | `cc.Label` | Inspector property in `MegawayModule` managing runtime lbMegaway. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
