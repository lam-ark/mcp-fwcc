---
id: "cc_core_lib:REST:api:properties"
title: "REST Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["REST", "rest", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `REST` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`logger`** | `any` | Operational field tracking state in `REST`. |
| **`apiUrl`** | `string, url: string, data: any, headers?: { [key: string]: string` | Operational field tracking state in `REST`. |

---

## 2. State Mutation Guardrails

All state fields in `REST` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
