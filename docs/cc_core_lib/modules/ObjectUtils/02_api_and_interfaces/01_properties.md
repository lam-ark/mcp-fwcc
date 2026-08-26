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

## 2. State Mutation Guardrails

All state fields in `ObjectUtils` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
