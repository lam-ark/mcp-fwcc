---
id: "cc_slot_module:TableModuleConfig:properties:runtime_state_variables"
title: "TableModuleConfig Runtime State Variables"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 TableModuleConfig Runtime State Variables

## 1. Runtime State Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`_symbolIndexes`** | `number[][] \| null` | `null` | `SYMBOL_INDEXES` getter | Cached 2D array of sequential symbol index integers. |
| **`NEAR_WIN_DELAY_STOP`** | `number` | `0` | `SlotTableNearWinModule`, `SlotTableModule` | Dynamic delay offset applied to current reel stopping phase. |
| **`RANDOM_MATRIX`** | `string[][]` | `[]` | Inspector / Dynamic overrides | Optional pre-defined fallback matrix collection. |
| **`BEAUTY_MATRIX`** | `string[][]` | `[]` | Inspector / Dynamic overrides | Optional pre-defined attract-mode matrix collection. |
