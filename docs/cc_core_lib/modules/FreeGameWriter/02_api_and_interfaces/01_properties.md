---
id: "cc_core_lib:FreeGameWriter:api:properties"
title: "FreeGameWriter Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["FreeGameWriter", "free_game_writer", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `FreeGameWriter` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game)` | Operational field tracking state in `FreeGameWriter`. |

---

## 2. State Mutation Lifecycle

All state fields in `FreeGameWriter` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
