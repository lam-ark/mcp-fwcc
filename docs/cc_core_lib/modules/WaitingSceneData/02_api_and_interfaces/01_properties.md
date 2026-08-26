---
id: "cc_core_lib:WaitingSceneData:api:properties"
title: "WaitingSceneData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["WaitingSceneData", "waiting_scene_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `WaitingSceneData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`active`** | `boolean` | Boolean flag indicating whether active is enabled or active in `WaitingSceneData`. |
| **`active`** | `boolean): void` | Operational field tracking state in `WaitingSceneData`. |

---

## 2. State Mutation Guardrails

All state fields in `WaitingSceneData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
