---
id: "cc_core_lib:FreeOptionDirector:api:properties"
title: "FreeOptionDirector Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["FreeOptionDirector", "free_option_director", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `FreeOptionDirector` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`_writer`** | `FreeOptionWriter` | Operational field tracking state in `FreeOptionDirector`. |
| **`game`** | `Game, gameMode: any)` | Operational field tracking state in `FreeOptionDirector`. |
| **`data`** | `any): Promise<boolean>` | Operational field tracking state in `FreeOptionDirector`. |

---

## 2. State Mutation Lifecycle

All state fields in `FreeOptionDirector` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
