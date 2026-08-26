---
id: "cc_core_lib:ObjectUtils:api:properties"
title: "ObjectUtils Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["ObjectUtils", "object_utils", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `ObjectUtils` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`value`** | `any, cache?: WeakMap<object, any>): any` | Operational field tracking state in `ObjectUtils`. |

---

## 2. State Mutation Lifecycle

All state fields in `ObjectUtils` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
