---
id: "cc_slot_module:SlotTableSoundEffectModule:properties:runtime_state_variables"
title: "SlotTableSoundEffectModule Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotTableSoundEffectModule Runtime State Variables

---

## 1. Internal Variables Table

| Field Name | Type | Default | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| `countBonus` | `number` | `0` | `onReelStartSound`, `onReelStopSound` | Cumulative count of Bonus symbols landed in current spin. |
| `countScatter` | `number` | `0` | `onReelStartSound`, `onReelStopSound` | Cumulative count of Scatter symbols landed in current spin. |
| `countJackpot` | `number` | `0` | `onReelStartSound`, `onReelStopSound` | Cumulative count of Jackpot symbols landed in current spin. |
| `tableConfig` | `TableModuleConfig`| `null` | `onLoadExtend` | Reference to sibling configuration component. |
