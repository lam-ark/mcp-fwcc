---
id: "cc_slot_module:CascadeModuleConfig:director_writer:subsystem_impacts"
title: "CascadeModuleConfig Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 CascadeModuleConfig Cross-Subsystem Impacts

---

## 1. Subsystem Coordination

| Subsystem | Impact |
| :--- | :--- |
| **`SlotSymbolManager`** | Coordinates with `SYMBOL_INDEXES` so symbols are fetched/recycled with matching global slot indices. |
| **`SlotTableModule`** | Matches table mask dimensions with `CASCADE_TABLE_CONFIG.cellSize` and `format`. |
