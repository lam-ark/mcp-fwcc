---
id: "cc_core_lib:BonusGameData:api:properties"
title: "BonusGameData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BonusGameData", "bonus_game_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BonusGameData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`selectedBoxId`** | `number` | Numeric counter or index value in `BonusGameData`. |
| **`boxId`** | `number): void` | Operational field tracking state in `BonusGameData`. |

---

## 2. State Mutation Lifecycle

All state fields in `BonusGameData` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
