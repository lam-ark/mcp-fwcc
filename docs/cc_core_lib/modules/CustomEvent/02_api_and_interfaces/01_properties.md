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

## 2. State Mutation Guardrails

All state fields in `CustomEvent` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
