---
id: "cc_slot_module:WinAmountModule:properties_and_state:runtime_state_variables"
title: "WinAmountModule Runtime State Variables"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 WinAmountModule Runtime State Variables

---

## 1. Runtime State

| Variable | Type | Initial | Description |
| :--- | :--- | :--- | :--- |
| `_currentValue` | `number` | `0` | Current numeric value displayed on label. |
| `_winValue` | `number` | `undefined` | Target target winning score. |
| `_callBackOnComplete`| `Function`| `null` | Promise resolve callback. |
| `_tweenValue` | `any` | `null` | Active `MoneyTween` handle. |
| `_tweenFade` | `any` | `null` | Active `fadeOut` tween handle. |
