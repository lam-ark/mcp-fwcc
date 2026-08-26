---
id: "cc_slot_mechanics:TransformSymbolVFX:api:properties"
title: "TransformSymbolVFX Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["TransformSymbolVFX", "transform_symbol_vfx", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `TransformSymbolVFX` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`skeleton`** | `sp.Skeleton` | Inspector property in `TransformSymbolVFX` managing runtime skeleton. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
