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

## 2. State Mutation Lifecycle

All state fields in `NormalGameWriter` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
