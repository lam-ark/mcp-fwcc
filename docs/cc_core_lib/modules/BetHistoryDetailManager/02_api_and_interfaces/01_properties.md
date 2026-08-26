---
id: "cc_core_lib:BetHistoryDetailManager:api:properties"
title: "BetHistoryDetailManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetHistoryDetailManager", "bet_history_detail_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetHistoryDetailManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`historyManager`** | `any` | Reference to the parent `BetHistoryManager` orchestrating modal dialogs, pagination bars, and view switching. |
| **`betHistoryDetailManager`** | `BetHistoryDetailManagerBase | BetHistoryDetailManagerRespinPortrait` | Operational field tracking state in `BetHistoryDetailManager`. |
| **`game`** | `Game, historyManager: any)` | Operational field tracking state in `BetHistoryDetailManager`. |
| **`sessionData`** | `any, betHistoryType?: number): void` | Operational field tracking state in `BetHistoryDetailManager`. |

---

## 2. State Mutation Lifecycle

All state fields in `BetHistoryDetailManager` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
