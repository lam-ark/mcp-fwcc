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

## 2. State Mutation Lifecycle

All state fields in `MainGame` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
