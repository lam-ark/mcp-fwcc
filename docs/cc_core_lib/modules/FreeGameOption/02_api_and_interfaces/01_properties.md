---
id: "cc_core_lib:FreeGameOption:api:properties"
title: "FreeGameOption Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["FreeGameOption", "free_game_option", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `FreeGameOption` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`eventManager`** | `EventManager` | Global event bus singleton for cross-module communication. |
| **`freeOptionData`** | `FreeOptionData` | Operational field tracking state in `FreeGameOption`. |
| **`countDownInterval`** | `any` | Operational field tracking state in `FreeGameOption`. |
| **`game`** | `Game, mode: number)` | Operational field tracking state in `FreeGameOption`. |
| **`option`** | `any): void` | Operational field tracking state in `FreeGameOption`. |

---

## 2. State Mutation Guardrails

All state fields in `FreeGameOption` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
