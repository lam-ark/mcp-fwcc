---
id: "cc_core_lib:REST:api:properties"
title: "REST Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["REST", "rest", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `REST` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`logger`** | `any` | Operational field tracking state in `REST`. |
| **`apiUrl`** | `string, url: string, data: any, headers?: { [key: string]: string` | Operational field tracking state in `REST`. |

---

## 2. State Mutation Lifecycle

All state fields in `REST` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
