---
id: "cc_core_lib:GameObject:api:properties"
title: "GameObject Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["GameObject", "game_object", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `GameObject` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game` | Operational field tracking state in `GameObject`. |
| **`game`** | `Game): void` | Operational field tracking state in `GameObject`. |

---

## 2. State Mutation Lifecycle

All state fields in `GameObject` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
