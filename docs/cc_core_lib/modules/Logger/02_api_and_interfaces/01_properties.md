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

## 2. State Mutation Lifecycle

All state fields in `Logger` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
