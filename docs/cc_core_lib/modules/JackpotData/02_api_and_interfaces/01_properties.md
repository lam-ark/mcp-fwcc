---
id: "cc_core_lib:JackpotData:api:properties"
title: "JackpotData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["JackpotData", "jackpot_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `JackpotData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`jackpots`** | `{ [key: string]: { [key: string]: any` | Collection of elements managed by `JackpotData`. |

---

## 2. State Mutation Lifecycle

All state fields in `JackpotData` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
