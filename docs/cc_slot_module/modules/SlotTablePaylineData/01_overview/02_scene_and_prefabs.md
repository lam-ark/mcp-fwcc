---
id: "cc_slot_module:SlotTablePaylineData:overview:scene_and_prefabs"
title: "SlotTablePaylineData Placement & Companions"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ SlotTablePaylineData Placement & Companions

---

## 1. Scene Graph Placement

Mounted on the `Payline` node directly beside `SlotTablePaylineModule` and `PaylineConfig`:

```text
Canvas/Director/GameMode/BoardG
└── Payline
    ├── SlotTablePaylineModule (Visual Controller)
    ├── SlotTablePaylineData (Data Layer)
    ├── PaylineConfig (Configuration)
    └── SlotPaylineSchedule (Timer Scheduler)
```

---

## 2. Companion Quad

| Companion | Class Name | Function |
| :--- | :--- | :--- |
| **Visual Controller** | `SlotTablePaylineModule` | Dispatches `PAYLINE_SET_DATA` to child layers. |
| **Data Model** | `SlotTablePaylineData` | Ingests reactive keys and parses win symbol coordinates. |
| **Configuration** | `PaylineConfig` | Specifies `PAYLINE_TYPE` and `TABLE_CONFIG`. |
| **Scheduler** | `SlotPaylineSchedule` | Handles sequential single-line timers. |
