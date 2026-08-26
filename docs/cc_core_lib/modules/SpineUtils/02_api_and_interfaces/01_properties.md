---
id: "cc_core_lib:SpineUtils:api:properties"
title: "SpineUtils Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["SpineUtils", "spine_utils", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `SpineUtils` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`spine`** | `sp.Skeleton): string[]` | Collection of elements managed by `SpineUtils`. |
| **`spine`** | `sp.Skeleton, name: string): number` | Operational field tracking state in `SpineUtils`. |
| **`spine`** | `sp.Skeleton, name: string): boolean` | Operational field tracking state in `SpineUtils`. |
| **`spine`** | `sp.Skeleton, name: string): boolean` | Operational field tracking state in `SpineUtils`. |
| **`spine`** | `sp.Skeleton, mixTime?: number): void` | Operational field tracking state in `SpineUtils`. |

---

## 2. State Mutation Lifecycle

All state fields in `SpineUtils` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
