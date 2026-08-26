---
id: "cc_core_lib:FreeGameDirector:api:properties"
title: "FreeGameDirector Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["FreeGameDirector", "free_game_director", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `FreeGameDirector` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`_writer`** | `FreeGameWriter` | Operational field tracking state in `FreeGameDirector`. |
| **`game`** | `Game, gameMode: any)` | Operational field tracking state in `FreeGameDirector`. |
| **`data`** | `any): Promise<any>` | Operational field tracking state in `FreeGameDirector`. |
| **`data`** | `any): Promise<boolean>` | Operational field tracking state in `FreeGameDirector`. |
| **`data`** | `any): Promise<boolean>` | Operational field tracking state in `FreeGameDirector`. |
| **`data`** | `any): Promise<boolean>` | Operational field tracking state in `FreeGameDirector`. |

---

## 2. State Mutation Lifecycle

All state fields in `FreeGameDirector` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
