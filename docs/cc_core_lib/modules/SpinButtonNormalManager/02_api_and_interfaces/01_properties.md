---
id: "cc_core_lib:SpinButtonNormalManager:api:properties"
title: "SpinButtonNormalManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["SpinButtonNormalManager", "spin_button_normal_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `SpinButtonNormalManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game)` | Operational field tracking state in `SpinButtonNormalManager`. |

---

## 2. State Mutation Guardrails

All state fields in `SpinButtonNormalManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
