---
id: "cc_core_lib:FreeOptionData:api:properties"
title: "FreeOptionData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["FreeOptionData", "free_option_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `FreeOptionData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`options`** | `any[]` | Collection of elements managed by `FreeOptionData`. |
| **`options`** | `any[]): void` | Collection of elements managed by `FreeOptionData`. |

---

## 2. State Mutation Guardrails

All state fields in `FreeOptionData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
