---
id: "cc_core_lib:LightningGameWriter:api:properties"
title: "LightningGameWriter Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["LightningGameWriter", "lightning_game_writer", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `LightningGameWriter` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game)` | Operational field tracking state in `LightningGameWriter`. |

---

## 2. State Mutation Lifecycle

All state fields in `LightningGameWriter` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
