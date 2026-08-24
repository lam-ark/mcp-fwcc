---
id: "cc_slot_module:SlotTablePaylineModule:properties:runtime_state_variables"
title: "SlotTablePaylineModule Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotTablePaylineModule Runtime State Variables

---

## 1. Internal State Variables

| Field Name | Type | Default | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| `paylineConfig` | `PaylineConfig` | `null` | `onLoadExtend` | Reference to configuration component. |
| `paylineSchedule`| `SlotPaylineSchedule` | `null` | `onLoadExtend` | Reference to the scheduler managing cyclic line presentation. |
| `slotTablePaylineData` | `SlotTablePaylineData` | `null` | `onLoadExtend` | Reference to data model layer. |
| `payLineEmitter` | `cc.EventTarget` | `null` | `init()` | Local event bus for coordinating child payline components. |
