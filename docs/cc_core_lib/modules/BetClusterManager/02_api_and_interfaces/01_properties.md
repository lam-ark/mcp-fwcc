---
id: "cc_core_lib:BetClusterManager:api:properties"
title: "BetClusterManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetClusterManager", "bet_cluster_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetClusterManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`totalCredit`** | `number` | Numeric counter or index value in `BetClusterManager`. |
| **`game`** | `Game)` | Operational field tracking state in `BetClusterManager`. |
| **`mBet`** | `any, eBet: any): void` | Operational field tracking state in `BetClusterManager`. |
| **`amount`** | `number): void` | Operational field tracking state in `BetClusterManager`. |

---

## 2. State Mutation Lifecycle

All state fields in `BetClusterManager` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
