---
id: "cc_slot_mechanics:TransformSymbolModule:api:properties"
title: "TransformSymbolModule Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["TransformSymbolModule", "transform_symbol_module", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `TransformSymbolModule` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`symbolManager`** | `SlotSymbolManager` | Inspector property in `TransformSymbolModule` managing runtime symbolManager. |
| **`vfxPool`** | `PoolFactoryModule` | Inspector property in `TransformSymbolModule` managing runtime vfxPool. |
| **`vfxLayer`** | `cc.Node` | Inspector property in `TransformSymbolModule` managing runtime vfxLayer. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
