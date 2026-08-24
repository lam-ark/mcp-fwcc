---
id: "cc_slot_module:SlotTablePaylineData:overview:scene_and_prefabs"
title: "SlotTablePaylineData Placement & Node Structure"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotTablePaylineData Placement & Node Structure

---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `SlotTablePaylineData` is co-located directly on the `SlotTablePaylineModule` node:

```text
MainGamePrefab (or FreeGamePrefab)
└── SlotTablePaylineModule [Node]
    ├── SlotTablePaylineModule (Visual Controller)
    ├── PaylineConfig (Configuration)
    ├── SlotTablePaylineData (Data Layer Component)
    └── SlotModuleEditorTag (Editor Tag)
```

---

## 2. Component Co-Location

| Component | Responsibility |
| :--- | :--- |
| **`SlotTablePaylineData`** | Ingests reactive keys (`payLines`, `matrix`) and converts coordinates on demand. |
| **`PaylineConfig`** | Supplies table dimensions (`format`) and `PAYLINE_TYPE` to `SlotTablePaylineData`. |
| **`SlotTablePaylineModule`** | Queries `SlotTablePaylineData.getPayLines()` and broadcasts `PAYLINE_SET_DATA`. |
