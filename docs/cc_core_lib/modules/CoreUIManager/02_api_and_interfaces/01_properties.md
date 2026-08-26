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

## 2. State Mutation Guardrails

All state fields in `CoreUIManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
