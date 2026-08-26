---
id: "cc_core_lib:BaseDirector:api:properties"
title: "BaseDirector Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BaseDirector", "base_director", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BaseDirector` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game` | Operational field tracking state in `BaseDirector`. |
| **`dataStore`** | `CoreDataStore` | Central reactive state store (`GameDataStore`) containing session data, bet matrices, and server responses. |
| **`eventManager`** | `EventManager` | Global event bus singleton for cross-module communication. |
| **`gameModeManager`** | `GameModeManager` | Operational field tracking state in `BaseDirector`. |
| **`name`** | `string` | Operational field tracking state in `BaseDirector`. |
| **`lastAction`** | `string` | Operational field tracking state in `BaseDirector`. |
| **`_scripts`** | `any` | Collection of elements managed by `BaseDirector`. |
| **`_writer`** | `any` | Operational field tracking state in `BaseDirector`. |
| **`game`** | `Game)` | Operational field tracking state in `BaseDirector`. |
| **`actionName`** | `any, data?: any): Promise<any>` | Operational field tracking state in `BaseDirector`. |
| **`actionName`** | `any): void` | Operational field tracking state in `BaseDirector`. |
| **`actionName`** | `any): void` | Operational field tracking state in `BaseDirector`. |

---

## 2. State Mutation Lifecycle

All state fields in `BaseDirector` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
