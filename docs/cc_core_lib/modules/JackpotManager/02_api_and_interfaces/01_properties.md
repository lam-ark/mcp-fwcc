---
id: "cc_core_lib:JackpotManager:api:properties"
title: "JackpotManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["JackpotManager", "jackpot_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `JackpotManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`dataStore`** | `CoreDataStore` | Central reactive state store (`GameDataStore`) containing session data, bet matrices, and server responses. |
| **`gameConfig`** | `any` | Operational field tracking state in `JackpotManager`. |
| **`jackpotData`** | `JackpotData` | Operational field tracking state in `JackpotManager`. |
| **`jackpotPrefix`** | `string` | Operational field tracking state in `JackpotManager`. |
| **`currency`** | `string` | Operational field tracking state in `JackpotManager`. |
| **`jackpots`** | `any` | Collection of elements managed by `JackpotManager`. |
| **`jackpotDataName`** | `string` | Operational field tracking state in `JackpotManager`. |
| **`game`** | `Game)` | Operational field tracking state in `JackpotManager`. |
| **`data`** | `[string, string]): void` | Operational field tracking state in `JackpotManager`. |
| **`data`** | `any): void` | Operational field tracking state in `JackpotManager`. |
| **`data`** | `any): void` | Operational field tracking state in `JackpotManager`. |
| **`jpName`** | `string): { keyBet: string` | Operational field tracking state in `JackpotManager`. |
| **`type`** | `string` | Operational field tracking state in `JackpotManager`. |
| **`allParts`** | `string[]` | Collection of elements managed by `JackpotManager`. |

---

## 2. State Mutation Guardrails

All state fields in `JackpotManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
