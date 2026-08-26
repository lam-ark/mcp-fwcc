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

## 2. State Mutation Guardrails

All state fields in `FreeGameDirector` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
