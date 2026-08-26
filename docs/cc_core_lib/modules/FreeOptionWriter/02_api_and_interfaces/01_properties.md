---
id: "cc_core_lib:FreeOptionWriter:api:properties"
title: "FreeOptionWriter Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["FreeOptionWriter", "free_option_writer", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `FreeOptionWriter` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game)` | Operational field tracking state in `FreeOptionWriter`. |

---

## 2. State Mutation Guardrails

All state fields in `FreeOptionWriter` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
