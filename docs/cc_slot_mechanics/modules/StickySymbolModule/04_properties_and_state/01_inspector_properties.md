---
id: "cc_slot_mechanics:StickySymbolModule:api:properties"
title: "StickySymbolModule Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `StickySymbolModule` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`stickyLayer`** | `cc.Node` | Inspector property in `StickySymbolModule` managing runtime stickyLayer. |
| **`stickyPool`** | `SlotSymbolManager` | Inspector property in `StickySymbolModule` managing runtime stickyPool. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
