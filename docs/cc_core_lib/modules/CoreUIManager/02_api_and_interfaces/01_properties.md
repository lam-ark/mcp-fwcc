---
id: "cc_core_lib:CoreUIManager:api:properties"
title: "CoreUIManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["CoreUIManager", "core_uimanager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `CoreUIManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`uiManagerData`** | `UIManagerData` | Operational field tracking state in `CoreUIManager`. |
| **`dataStore`** | `CoreDataStore` | Central reactive state store (`GameDataStore`) containing session data, bet matrices, and server responses. |
| **`countFTR`** | `number` | Numeric counter or index value in `CoreUIManager`. |
| **`canCountFTR`** | `boolean` | Boolean flag indicating whether countftr is enabled or active in `CoreUIManager`. |
| **`isSwitching`** | `boolean): void` | Boolean flag indicating whether switching is enabled or active in `CoreUIManager`. |
| **`isShowing`** | `boolean): void` | Boolean flag indicating whether showing is enabled or active in `CoreUIManager`. |
| **`isShowing`** | `boolean): void` | Boolean flag indicating whether showing is enabled or active in `CoreUIManager`. |
| **`active`** | `boolean): void` | Operational field tracking state in `CoreUIManager`. |

---

## 2. State Mutation Lifecycle

All state fields in `CoreUIManager` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
