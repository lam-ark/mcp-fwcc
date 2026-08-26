---
id: "cc_core_lib:TimeUtils:api:properties"
title: "TimeUtils Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["TimeUtils", "time_utils", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `TimeUtils` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`ts`** | `number, format: string): string` | Collection of elements managed by `TimeUtils`. |
| **`date`** | `Date, formatString: string): string` | Operational field tracking state in `TimeUtils`. |
| **`ts`** | `number): string` | Collection of elements managed by `TimeUtils`. |
| **`ts`** | `number): string` | Collection of elements managed by `TimeUtils`. |
| **`ts`** | `number, timeFormat?: string, breakLine?: boolean): string` | Collection of elements managed by `TimeUtils`. |
| **`i`** | `number): string` | Operational field tracking state in `TimeUtils`. |
| **`secs`** | `number): string` | Collection of elements managed by `TimeUtils`. |
| **`endTime`** | `number, serverTime: number, millisecond?: number): number` | Duration in seconds or milliseconds controlling timing behavior. |

---

## 2. State Mutation Lifecycle

All state fields in `TimeUtils` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
