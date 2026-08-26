---
id: "cc_core_lib:CustomEvent:api:properties"
title: "CustomEvent Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["CustomEvent", "custom_event", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `CustomEvent` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`details`** | `any` | Collection of elements managed by `CustomEvent`. |
| **`name`** | `string, bubbles?: boolean, details?: any)` | Operational field tracking state in `CustomEvent`. |

---

## 2. State Mutation Lifecycle

All state fields in `CustomEvent` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
