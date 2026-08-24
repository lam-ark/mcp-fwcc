---
id: "cc_slot_module:JackpotModule:properties_and_state:runtime_state_variables"
title: "JackpotModule Runtime State Variables"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 JackpotModule Runtime State Variables

---

## 1. Runtime State

| Variable | Type | Initial | Description |
| :--- | :--- | :--- | :--- |
| `isPauseJackpot` | `boolean` | `false` | Pause gate flag for progressive updates. |
| `jackpotData` | `eno.JackpotData` | `null` | Observed reactive jackpot data model. |
| `uiManagerData` | `eno.UIManagerData` | `null` | Observed UI active states. |
| `modelName` | `string` | `"JackpotData"`| Key to resolve model in `GameLogic`. |
| `observerJPIndex` | `Function` | `null` | Handle for active nested bet index observer. |
| `currentData` | `Object` | `{}` | Cached jackpot values indexed by bet level. |
