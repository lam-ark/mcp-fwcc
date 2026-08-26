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

## 2. State Mutation Lifecycle

All state fields in `FreeOptionWriter` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
