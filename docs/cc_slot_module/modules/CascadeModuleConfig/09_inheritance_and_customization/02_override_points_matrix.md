---
id: "cc_slot_module:CascadeModuleConfig:inheritance:override_points_matrix"
title: "CascadeModuleConfig Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 CascadeModuleConfig Override Points & Extension Matrix

---

## 1. Override Points Matrix

| Field | Type | Override Nature | Purpose |
| :--- | :--- | :--- | :--- |
| `CASCADE_TABLE_CONFIG` | Object | Property Override | Define reel counts, row heights, and pixel dimensions. |
| `DROP_SYMBOL_CODE` | `string` | Property Override | Customize backend elimination token (e.g. `'-1'` vs `'X'`). |
| `FALLING_TIME` | `number` | Property Override | Adjust base drop animation velocity. |
| `CASCADING_TIME_COMPLETED` | `number` | Property Override | Adjust maximum step wait budget. |
