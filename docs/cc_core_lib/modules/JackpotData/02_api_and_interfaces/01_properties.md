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

## 2. State Mutation Guardrails

All state fields in `JackpotData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
