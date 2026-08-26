---
id: "cc_core_lib:MainGame:api:properties"
title: "MainGame Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["MainGame", "main_game", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `MainGame` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`eventManager`** | `EventManager` | Global event bus singleton for cross-module communication. |
| **`spinButton`** | `SpinButtonNormalManager` | Operational field tracking state in `MainGame`. |
| **`director`** | `NormalGameDirector` | Operational field tracking state in `MainGame`. |
| **`dataStore`** | `CoreDataStore` | Central reactive state store (`GameDataStore`) containing session data, bet matrices, and server responses. |
| **`game`** | `Game, mode: number)` | Operational field tracking state in `MainGame`. |
| **`betKey`** | `string, extraBet: string): void` | Operational field tracking state in `MainGame`. |
| **`betKey`** | `string, extraBet: string): boolean` | Operational field tracking state in `MainGame`. |

---

## 2. State Mutation Guardrails

All state fields in `MainGame` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
