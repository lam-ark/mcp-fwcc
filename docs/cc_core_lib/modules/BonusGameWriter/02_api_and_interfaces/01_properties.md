---
id: "cc_core_lib:BonusGameWriter:api:properties"
title: "BonusGameWriter Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BonusGameWriter", "bonus_game_writer", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BonusGameWriter` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game)` | Operational field tracking state in `BonusGameWriter`. |
| **`cellId`** | `number): IScriptWriter[]` | Collection of elements managed by `BonusGameWriter`. |

---

## 2. State Mutation Lifecycle

All state fields in `BonusGameWriter` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
