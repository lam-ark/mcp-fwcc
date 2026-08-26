---
id: "cc_core_lib:FreeGame:api:properties"
title: "FreeGame Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["FreeGame", "free_game", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `FreeGame` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`spinButton`** | `SpinButtonFreeManager` | Operational field tracking state in `FreeGame`. |
| **`game`** | `Game, mode: number)` | Operational field tracking state in `FreeGame`. |

---

## 2. State Mutation Lifecycle

All state fields in `FreeGame` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
