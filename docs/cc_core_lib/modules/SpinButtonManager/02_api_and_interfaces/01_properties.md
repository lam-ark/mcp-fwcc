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

## 2. State Mutation Guardrails

All state fields in `SpinButtonManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
