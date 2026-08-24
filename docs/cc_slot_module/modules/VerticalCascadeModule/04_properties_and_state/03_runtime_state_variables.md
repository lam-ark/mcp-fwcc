---
id: "cc_slot_module:VerticalCascadeModule:properties_and_state:runtime_state_variables"
title: "VerticalCascadeModule Runtime State Variables"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 VerticalCascadeModule Runtime State Variables

---

## 1. Runtime State Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `matrix` | `string[][]` | `[]` | Active 2D matrix of symbol values. |
| `listTraceWay` | `string[][]` | `[]` | 2D matrix with eliminated symbols marked as `'-1'`. |
| `listSymbols` | `cc.Node[][]` | `[]` | Active 2D array of symbol node references. |
| `listDropColumns` | `number[]` | `[]` | List of column indices containing dropped symbols. |
| `listDroppedSymbols`| `cc.Node[]` | `[]` | Flat list of surviving symbols shifting downward. |
| `listNewSymbols` | `cc.Node[]` | `[]` | Flat list of newly instantiated top symbols. |
| `_hasStartRespin` | `boolean` | `false` | Flag indicating respin elimination started. |
| `_hasRespinCompleted`| `boolean` | `false` | Flag indicating respin cascade finished. |
| `_respinCB` | `Function` | `null` | Active scheduled callback for completion timeout. |
| `_stopRespinCB` | `Function` | `null` | Promise resolve callback for `stopRespin()`. |
