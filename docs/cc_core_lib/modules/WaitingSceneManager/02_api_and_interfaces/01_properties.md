---
id: "cc_core_lib:WaitingSceneManager:api:properties"
title: "WaitingSceneManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["WaitingSceneManager", "waiting_scene_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `WaitingSceneManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`data`** | `WaitingSceneData` | Operational field tracking state in `WaitingSceneManager`. |
| **`game`** | `Game)` | Operational field tracking state in `WaitingSceneManager`. |

---

## 2. State Mutation Lifecycle

All state fields in `WaitingSceneManager` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
