---
id: "cc_core_lib:DialogData:api:properties"
title: "DialogData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["DialogData", "dialog_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `DialogData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`active`** | `boolean` | Boolean flag indicating whether active is enabled or active in `DialogData`. |
| **`title`** | `string` | Operational field tracking state in `DialogData`. |
| **`message`** | `string` | Operational field tracking state in `DialogData`. |
| **`buttons`** | `any[]` | Collection of elements managed by `DialogData`. |
| **`isOkBtnActive`** | `boolean` | Boolean flag indicating whether okbtnactive is enabled or active in `DialogData`. |
| **`isCancelBtnActive`** | `boolean` | Boolean flag indicating whether cancelbtnactive is enabled or active in `DialogData`. |
| **`active`** | `boolean): void` | Operational field tracking state in `DialogData`. |
| **`message`** | `string): void` | Operational field tracking state in `DialogData`. |
| **`title`** | `string): void` | Operational field tracking state in `DialogData`. |
| **`isActive`** | `boolean): void` | Boolean flag indicating whether active is enabled or active in `DialogData`. |
| **`isActive`** | `boolean): void` | Boolean flag indicating whether active is enabled or active in `DialogData`. |

---

## 2. State Mutation Lifecycle

All state fields in `DialogData` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
