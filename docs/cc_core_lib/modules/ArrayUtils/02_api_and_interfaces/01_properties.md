---
id: "cc_core_lib:ArrayUtils:api:properties"
title: "ArrayUtils Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["ArrayUtils", "array_utils", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `ArrayUtils` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`matrix`** | `Array<any>): Array<any>` | Collection of elements managed by `ArrayUtils`. |
| **`matrix`** | `Array<any>, defaultValue?: string): Array<any>` | Collection of elements managed by `ArrayUtils`. |
| **`a`** | `any[], b: any[]): boolean` | Collection of elements managed by `ArrayUtils`. |
| **`arr`** | `T[][]): T[]` | Collection of elements managed by `ArrayUtils`. |
| **`formatMatrix`** | `number[], index: number): { row: number` | Collection of elements managed by `ArrayUtils`. |
| **`col`** | `number` | Numeric counter or index value in `ArrayUtils`. |

---

## 2. State Mutation Guardrails

All state fields in `ArrayUtils` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
