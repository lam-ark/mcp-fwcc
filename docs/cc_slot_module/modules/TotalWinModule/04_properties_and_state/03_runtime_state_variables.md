---
id: "cc_slot_module:TotalWinModule:properties_and_state:runtime_state_variables"
title: "TotalWinModule Runtime State Variables"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 TotalWinModule Runtime State Variables

---

## 1. Runtime Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `currentValue` | `number` | `0` | Active count-up numeric value. |
| `_totalWinAmount`| `number` | `0` | Calculated aggregate win amount. |
| `_hasSkip` | `boolean` | `false` | Gate preventing multiple skip actions. |
| `_skippable` | `boolean` | `false` | Unlocked after `delayShowTime`. |
| `_isUpdating` | `boolean` | `false` | Active state flag. |
