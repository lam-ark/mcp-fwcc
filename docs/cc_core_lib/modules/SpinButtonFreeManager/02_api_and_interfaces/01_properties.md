---
id: "cc_core_lib:SpinButtonFreeManager:api:properties"
title: "SpinButtonFreeManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["SpinButtonFreeManager", "spin_button_free_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `SpinButtonFreeManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game)` | Operational field tracking state in `SpinButtonFreeManager`. |

---

## 2. State Mutation Guardrails

All state fields in `SpinButtonFreeManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
