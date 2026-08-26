---
id: "cc_core_lib:BaseManager:api:properties"
title: "BaseManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BaseManager", "base_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BaseManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`name`** | `string` | Operational field tracking state in `BaseManager`. |
| **`game`** | `Game` | Operational field tracking state in `BaseManager`. |
| **`eventManager`** | `EventManager` | Global event bus singleton for cross-module communication. |
| **`game`** | `Game)` | Operational field tracking state in `BaseManager`. |

---

## 2. State Mutation Guardrails

All state fields in `BaseManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
