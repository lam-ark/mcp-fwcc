---
id: "cc_slot_module:JackpotWinModule:properties_and_state:runtime_state_variables"
title: "JackpotWinModule Runtime State Variables"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 JackpotWinModule Runtime State Variables

---

## 1. Runtime State Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `jackpotType` | `string` | `""` | Jackpot tier identifier (e.g. "GRAND", "MAJOR"). |
| `jackpotValue` | `number` | `0` | Total jackpot cash award amount. |
| `_hasClicked` | `boolean` | `false` | Gate preventing multiple skip clicks during acceleration. |
| `_isUpdating` | `boolean` | `false` | Status flag for active count. |
| `_skippable` | `boolean` | `false` | Flag unlocked after `delayShowTime`. |
