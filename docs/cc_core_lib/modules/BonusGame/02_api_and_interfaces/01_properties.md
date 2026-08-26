---
id: "cc_core_lib:BonusGame:api:properties"
title: "BonusGame Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BonusGame", "bonus_game", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BonusGame` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`bonusGameData`** | `BonusGameData` | Operational field tracking state in `BonusGame`. |
| **`eventManager`** | `EventManager` | Global event bus singleton for cross-module communication. |
| **`listOpenedIndexes`** | `any[]` | Collection of elements managed by `BonusGame`. |
| **`totalItemAmount`** | `number` | Numeric counter or index value in `BonusGame`. |
| **`maxOpenItem`** | `number` | Numeric counter or index value in `BonusGame`. |
| **`game`** | `Game, mode: number)` | Operational field tracking state in `BonusGame`. |
| **`cellId`** | `number): void` | Operational field tracking state in `BonusGame`. |
| **`cellId`** | `number): void` | Operational field tracking state in `BonusGame`. |

---

## 2. State Mutation Lifecycle

All state fields in `BonusGame` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
