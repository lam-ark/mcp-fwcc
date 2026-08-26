---
id: "cc_core_lib:TurboButtonManager:api:properties"
title: "TurboButtonManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["TurboButtonManager", "turbo_button_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `TurboButtonManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`dataStore`** | `CoreDataStore` | Central reactive state store (`GameDataStore`) containing session data, bet matrices, and server responses. |
| **`turboButtonData`** | `TurboButtonData` | Operational field tracking state in `TurboButtonManager`. |
| **`isHover`** | `boolean` | Boolean flag indicating whether hover is enabled or active in `TurboButtonManager`. |
| **`isPressed`** | `boolean` | Boolean flag indicating whether pressed is enabled or active in `TurboButtonManager`. |
| **`realModeState`** | `boolean` | Boolean flag indicating whether realmodestate is enabled or active in `TurboButtonManager`. |
| **`game`** | `Game)` | Operational field tracking state in `TurboButtonManager`. |

---

## 2. State Mutation Lifecycle

All state fields in `TurboButtonManager` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
