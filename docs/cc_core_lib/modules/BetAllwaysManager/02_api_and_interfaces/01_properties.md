---
id: "cc_core_lib:BetAllwaysManager:api:properties"
title: "BetAllwaysManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetAllwaysManager", "bet_allways_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetAllwaysManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`totalCredit`** | `number` | Numeric counter or index value in `BetAllwaysManager`. |
| **`game`** | `Game)` | Operational field tracking state in `BetAllwaysManager`. |
| **`mBet`** | `any, eBet: any): void` | Operational field tracking state in `BetAllwaysManager`. |
| **`amount`** | `number): void` | Operational field tracking state in `BetAllwaysManager`. |

---

## 2. State Mutation Lifecycle

All state fields in `BetAllwaysManager` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
