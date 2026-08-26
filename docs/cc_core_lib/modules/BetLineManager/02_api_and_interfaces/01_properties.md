---
id: "cc_core_lib:BetLineManager:api:properties"
title: "BetLineManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetLineManager", "bet_line_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetLineManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`betLineNumber`** | `number` | Numeric counter or index value in `BetLineManager`. |
| **`maxBetLine`** | `number` | Numeric counter or index value in `BetLineManager`. |
| **`config`** | `any` | Operational field tracking state in `BetLineManager`. |
| **`game`** | `Game)` | Operational field tracking state in `BetLineManager`. |
| **`mBet`** | `any, eBet: any): void` | Operational field tracking state in `BetLineManager`. |

---

## 2. State Mutation Lifecycle

All state fields in `BetLineManager` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
