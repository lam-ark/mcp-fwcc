---
id: "cc_core_lib:Scheduler:api:properties"
title: "Scheduler Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["Scheduler", "scheduler", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `Scheduler` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`_id`** | `string` | Operational field tracking state in `Scheduler`. |
| **`id`** | `string)` | Operational field tracking state in `Scheduler`. |
| **`callback`** | `Function, time: number): any` | Operational field tracking state in `Scheduler`. |
| **`callback`** | `Function, time: number): any` | Operational field tracking state in `Scheduler`. |
| **`callback`** | `Function, interval: number, repeat: number, delay: number): any` | Operational field tracking state in `Scheduler`. |
| **`callback_fn`** | `Function): void` | Operational field tracking state in `Scheduler`. |

---

## 2. State Mutation Guardrails

All state fields in `Scheduler` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
