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

## 2. State Mutation Guardrails

All state fields in `GameModeManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
