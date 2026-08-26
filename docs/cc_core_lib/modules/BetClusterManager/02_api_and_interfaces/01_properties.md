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

## 2. State Mutation Guardrails

All state fields in `BetClusterManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
