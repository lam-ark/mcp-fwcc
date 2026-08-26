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

## 2. State Mutation Guardrails

All state fields in `DialogManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
