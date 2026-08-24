---
id: "cc_slot_module:SlotTableData:properties:inspector_properties"
title: "SlotTableData Inspector Properties Reference"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "properties", "inspector_properties"]
---

# 🎛️ SlotTableData Inspector Properties Reference

---

## 1. Component Configuration & References

| Property Field | Type | Binding Method | Purpose |
| :--- | :--- | :--- | :--- |
| `config` | `TableModuleConfig` | Co-located `getComponent(TableModuleConfig)` | Reference to sibling configuration component providing `TABLE_FORMAT`. |
| `registeredKeys` | `string[]` | Static definition (`["matrix0", "matrix", "normalGameMatrix", "freeGameMatrix"]`) | Declares reactive keys subscribed to from `GameDataStore`. |
