---
id: "cc_core_lib:SpinButtonManager:api:properties"
title: "SpinButtonManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["SpinButtonManager", "spin_button_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `SpinButtonManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`dataStore`** | `CoreDataStore` | Central reactive state store (`GameDataStore`) containing session data, bet matrices, and server responses. |
| **`spinButtonData`** | `SpinButtonData` | Operational field tracking state in `SpinButtonManager`. |
| **`commandBridge`** | `CommandBridge` | Operational field tracking state in `SpinButtonManager`. |
| **`mode`** | `number` | Numeric counter or index value in `SpinButtonManager`. |
| **`game`** | `Game)` | Operational field tracking state in `SpinButtonManager`. |
| **`name`** | `string): void` | Operational field tracking state in `SpinButtonManager`. |
| **`mode`** | `number): void` | Operational field tracking state in `SpinButtonManager`. |

---

## 2. State Mutation Lifecycle

All state fields in `SpinButtonManager` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
