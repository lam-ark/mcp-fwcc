---
id: "cc_slot_module:SlotTablePaylineData:director_writer:subsystem_impacts"
title: "SlotTablePaylineData Subsystem Impacts"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SlotTablePaylineData Subsystem Impacts

---

## 1. Subsystems Cross-Reference

| Component / Subsystem | Interaction | Impact |
| :--- | :--- | :--- |
| **`GameDataStore`** | `updateDataModules()` | Hydrates raw string arrays into `SlotTablePaylineData` instance properties. |
| **`SlotTablePaylineModule`** | Calls `getMatrix()`, `getPayLines()`, `getWinSymbols()` | Consumes processed coordinate geometries. |
| **`PaylineConfig`** | Reads `PAYLINE_TYPE`, `TABLE_CONFIG` | Supplies pay system rules and matrix dimensions. |
