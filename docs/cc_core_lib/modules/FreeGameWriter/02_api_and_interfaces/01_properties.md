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

## 2. State Mutation Guardrails

All state fields in `FreeGameWriter` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
