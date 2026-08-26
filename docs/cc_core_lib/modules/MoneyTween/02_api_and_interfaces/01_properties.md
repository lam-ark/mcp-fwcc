---
id: "cc_core_lib:MoneyTween:api:properties"
title: "MoneyTween Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["MoneyTween", "money_tween", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `MoneyTween` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`formatter`** | `any` | Reference to the `MoneyFormatter` instance providing localized currency symbols, decimal places, and grouping separators. |
| **`_tweens`** | `Set<any>` | Set of currently active `cc.Tween` instances tracked for batch cancellation and memory leak prevention. |
| **`formatter`** | `any)` | Reference to the `MoneyFormatter` instance providing localized currency symbols, decimal places, and grouping separators. |
| **`target`** | `cc.Node, duration: number, endValue: number, options?: Options): cc.Tween` | Scene graph node reference associated with `MoneyTween`. |
| **`target`** | `cc.Node, duration: number, endValue: number, options?: Options): cc.Tween` | Scene graph node reference associated with `MoneyTween`. |
| **`target`** | `cc.Node, duration: number, endValue: number, options?: Options): cc.Tween` | Scene graph node reference associated with `MoneyTween`. |
| **`target`** | `cc.Node): number` | Scene graph node reference associated with `MoneyTween`. |
| **`target`** | `cc.Node, duration: number, endValue: number, options?: Options): cc.Tween` | Scene graph node reference associated with `MoneyTween`. |

---

## 2. State Mutation Guardrails

All state fields in `MoneyTween` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
