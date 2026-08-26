---
id: "cc_core_lib:GameModeManager:api:properties"
title: "GameModeManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["GameModeManager", "game_mode_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `GameModeManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`gameModeMapping`** | `Record<number, typeof GameMode>` | Operational field tracking state in `GameModeManager`. |
| **`currentModes`** | `GameMode[]` | Collection of elements managed by `GameModeManager`. |
| **`game`** | `Game)` | Operational field tracking state in `GameModeManager`. |
| **`type`** | `number): void` | Operational field tracking state in `GameModeManager`. |
| **`type`** | `any): Promise<boolean>` | Operational field tracking state in `GameModeManager`. |
| **`type`** | `number): Promise<boolean>` | Operational field tracking state in `GameModeManager`. |

---

## 2. State Mutation Lifecycle

All state fields in `GameModeManager` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
