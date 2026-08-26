---
id: "cc_core_lib:MathUtils:api:properties"
title: "MathUtils Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["MathUtils", "math_utils", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `MathUtils` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`n`** | `number): number` | Operational field tracking state in `MathUtils`. |
| **`n`** | `number, k: number): number` | Operational field tracking state in `MathUtils`. |
| **`pos`** | `number[], ratio: number): number` | Collection of elements managed by `MathUtils`. |
| **`start`** | `any, end: any): number` | Operational field tracking state in `MathUtils`. |
| **`min`** | `number, max: number): number` | Operational field tracking state in `MathUtils`. |
| **`min`** | `number, max: number): number` | Operational field tracking state in `MathUtils`. |

---

## 2. State Mutation Guardrails

All state fields in `MathUtils` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
