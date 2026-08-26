---
id: "cc_core_lib:Logger:api:properties"
title: "Logger Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["Logger", "logger", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `Logger` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`data`** | `{ log?: any` | Operational field tracking state in `Logger`. |

---

## 2. State Mutation Guardrails

All state fields in `Logger` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
