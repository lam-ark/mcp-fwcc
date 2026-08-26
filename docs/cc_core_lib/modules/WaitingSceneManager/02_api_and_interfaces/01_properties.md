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

## 2. State Mutation Guardrails

All state fields in `WaitingSceneManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
