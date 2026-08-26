---
id: "cc_core_lib:DataModel:api:properties"
title: "DataModel Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["DataModel", "data_model", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `DataModel` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`_data`** | `any` | Operational field tracking state in `DataModel`. |
| **`key`** | `string, value: any): void` | Operational field tracking state in `DataModel`. |
| **`key`** | `string): any` | Operational field tracking state in `DataModel`. |
| **`key`** | `string): void` | Operational field tracking state in `DataModel`. |

---

## 2. State Mutation Lifecycle

All state fields in `DataModel` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
