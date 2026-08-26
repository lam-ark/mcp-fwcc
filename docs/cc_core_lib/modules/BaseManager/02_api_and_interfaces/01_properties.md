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

## 2. State Mutation Lifecycle

All state fields in `BaseManager` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
