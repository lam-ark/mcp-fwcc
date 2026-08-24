---
id: "cc_slot_module:SlotTablePaylineData:properties:runtime_state_variables"
title: "SlotTablePaylineData Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotTablePaylineData Runtime State Variables

---

## 1. Internal State Variables

| Field Name | Type | Default | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| `config` | `PaylineConfig` | `null` | `onloadExtend` | Sibling config reference. |
| `state` | `number` | `-1` | Reactive Sync | Current game mode ID (`GAME_MODE_ENUM`). |
| `isResume` | `boolean` | `false` | Reactive Sync | Reconnection / state hydration flag. |
| `registeredKeys`| `string[]` | 15 keys | Class Declaration | Keys subscribed to in `GameDataStore`. |
