---
id: "cc_core_lib:CommonUtils:api:properties"
title: "CommonUtils Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["CommonUtils", "common_utils", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `CommonUtils` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`key`** | `string, value: any): void` | Operational field tracking state in `CommonUtils`. |
| **`e`** | `any): string` | Operational field tracking state in `CommonUtils`. |
| **`object`** | `any, value: any): string` | Operational field tracking state in `CommonUtils`. |
| **`object`** | `any): string[]` | Collection of elements managed by `CommonUtils`. |
| **`object`** | `any): number[]` | Collection of elements managed by `CommonUtils`. |
| **`arr`** | `any[]): string[]` | Collection of elements managed by `CommonUtils`. |
| **`arr`** | `any[], removeGameId?: boolean): any` | Collection of elements managed by `CommonUtils`. |
| **`obj`** | `any, keysMap: any): any` | Operational field tracking state in `CommonUtils`. |
| **`array`** | `any[], pickNumber?: number): any[]` | Collection of elements managed by `CommonUtils`. |
| **`userName`** | `string, maxChar?: number): string` | Operational field tracking state in `CommonUtils`. |

---

## 2. State Mutation Guardrails

All state fields in `CommonUtils` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
