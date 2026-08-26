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

## 2. State Mutation Guardrails

All state fields in `FreeOptionDirector` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
