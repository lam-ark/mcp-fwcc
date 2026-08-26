---
id: "cc_core_lib:BetManager:api:properties"
title: "BetManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetManager", "bet_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`config`** | `any` | Operational field tracking state in `BetManager`. |
| **`betKey`** | `string` | Operational field tracking state in `BetManager`. |
| **`betData`** | `BetData` | Operational field tracking state in `BetManager`. |
| **`minBetCircular`** | `number` | Numeric counter or index value in `BetManager`. |
| **`maxBetCircular`** | `number` | Numeric counter or index value in `BetManager`. |
| **`minExtraBetCircular`** | `number` | Numeric counter or index value in `BetManager`. |
| **`maxExtraBetCircular`** | `number` | Numeric counter or index value in `BetManager`. |
| **`lastBetId`** | `string` | Operational field tracking state in `BetManager`. |
| **`game`** | `Game)` | Operational field tracking state in `BetManager`. |
| **`mBet`** | `any, eBet: any): void` | Operational field tracking state in `BetManager`. |
| **`data`** | `string): void` | Operational field tracking state in `BetManager`. |
| **`betId`** | `any): void` | Operational field tracking state in `BetManager`. |
| **`betId`** | `any): void` | Operational field tracking state in `BetManager`. |
| **`extraBetKey`** | `string): void` | Operational field tracking state in `BetManager`. |
| **`betKey`** | `string, extraBet: string): number` | Operational field tracking state in `BetManager`. |

---

## 2. State Mutation Lifecycle

All state fields in `BetManager` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
