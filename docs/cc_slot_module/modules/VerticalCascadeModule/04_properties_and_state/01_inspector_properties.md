---
id: "cc_slot_module:VerticalCascadeModule:properties_and_state:inspector_properties"
title: "VerticalCascadeModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ VerticalCascadeModule Inspector Properties Specification

---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `container` | `cc.Node` | `null` | Parent node hosting dynamic falling symbol instances. |
| `symbolManager` | `SlotSymbolManager` | `null` | Reference to symbol pooling and lifecycle manager (auto-fetched if null). |
