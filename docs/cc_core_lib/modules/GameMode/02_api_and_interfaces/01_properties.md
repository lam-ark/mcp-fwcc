---
id: "cc_core_lib:GameMode:api:properties"
title: "GameMode Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["GameMode", "game_mode", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `GameMode` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game` | Operational field tracking state in `GameMode`. |
| **`name`** | `string` | Operational field tracking state in `GameMode`. |
| **`mode`** | `any` | Operational field tracking state in `GameMode`. |
| **`dataStore`** | `CoreDataStore` | Central reactive state store (`GameDataStore`) containing session data, bet matrices, and server responses. |
| **`director`** | `any` | Operational field tracking state in `GameMode`. |
| **`onExitCb`** | `any` | Operational field tracking state in `GameMode`. |
| **`game`** | `Game, mode: number)` | Operational field tracking state in `GameMode`. |

---

## 2. State Mutation Guardrails

All state fields in `GameMode` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
