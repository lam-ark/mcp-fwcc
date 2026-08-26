---
id: "cc_core_lib:DialogManager:api:properties"
title: "DialogManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["DialogManager", "dialog_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `DialogManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`enableStack`** | `boolean` | Boolean flag indicating whether enablestack is enabled or active in `DialogManager`. |
| **`dialogData`** | `DialogData` | Operational field tracking state in `DialogManager`. |
| **`actionOK`** | `any` | Operational field tracking state in `DialogManager`. |
| **`actionCancel`** | `any` | Operational field tracking state in `DialogManager`. |
| **`uiManager`** | `CoreUIManager` | Operational field tracking state in `DialogManager`. |
| **`game`** | `Game)` | Operational field tracking state in `DialogManager`. |
| **`message`** | `string, actionOK?: any, actionCancel?: any): void` | Operational field tracking state in `DialogManager`. |

---

## 2. State Mutation Lifecycle

All state fields in `DialogManager` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
