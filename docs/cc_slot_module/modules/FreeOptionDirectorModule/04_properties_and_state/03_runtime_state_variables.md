---
id: "cc_slot_module:FreeOptionDirectorModule:properties:runtime_state_variables"
title: "FreeOptionDirectorModule Runtime State Variables"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 FreeOptionDirectorModule Runtime State Variables

## 1. Runtime State Variables Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`autoSelectText`** | `string` | `""` | `localizeText()` | Localized reminder prefix string. |
| **`defaultCountdownTime`** | `number` | `15` | `init()` | Cached baseline timer value for resets. |
| **`_repeatCountDown`** | `cc.Tween` | `null` | `startCountDown()`, `stopCountDown()`, `onDestroy()` | Active repeating tween handle. |
