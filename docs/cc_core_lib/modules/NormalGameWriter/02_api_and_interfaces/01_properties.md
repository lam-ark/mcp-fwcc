---
id: "cc_core_lib:NormalGameWriter:api:properties"
title: "NormalGameWriter Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["NormalGameWriter", "normal_game_writer", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `NormalGameWriter` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game)` | Operational field tracking state in `NormalGameWriter`. |
| **`buyFeatureData`** | `{ betKey: string` | Operational field tracking state in `NormalGameWriter`. |
| **`extraBet`** | `string` | Operational field tracking state in `NormalGameWriter`. |

---

## 2. State Mutation Guardrails

All state fields in `NormalGameWriter` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
