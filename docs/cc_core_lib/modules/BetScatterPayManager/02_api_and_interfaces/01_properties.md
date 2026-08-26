---
id: "cc_core_lib:BetScatterPayManager:api:properties"
title: "BetScatterPayManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetScatterPayManager", "bet_scatter_pay_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetScatterPayManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`totalCredit`** | `number` | Numeric counter or index value in `BetScatterPayManager`. |
| **`game`** | `Game)` | Operational field tracking state in `BetScatterPayManager`. |
| **`mBet`** | `any, eBet: any): void` | Operational field tracking state in `BetScatterPayManager`. |
| **`amount`** | `number): void` | Operational field tracking state in `BetScatterPayManager`. |

---

## 2. State Mutation Guardrails

All state fields in `BetScatterPayManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
