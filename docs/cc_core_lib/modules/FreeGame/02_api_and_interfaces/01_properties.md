---
id: "cc_core_lib:FreeGame:api:properties"
title: "FreeGame Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["FreeGame", "free_game", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `FreeGame` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`spinButton`** | `SpinButtonFreeManager` | Operational field tracking state in `FreeGame`. |
| **`game`** | `Game, mode: number)` | Operational field tracking state in `FreeGame`. |

---

## 2. State Mutation Guardrails

All state fields in `FreeGame` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
