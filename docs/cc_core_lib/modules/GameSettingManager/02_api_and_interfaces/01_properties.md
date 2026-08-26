---
id: "cc_core_lib:GameSettingManager:api:properties"
title: "GameSettingManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["GameSettingManager", "game_setting_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `GameSettingManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`gameSettingData`** | `GameSettingData` | Operational field tracking state in `GameSettingManager`. |
| **`storageKeyBGM`** | `string` | Operational field tracking state in `GameSettingManager`. |
| **`storageKeySFX`** | `string` | Operational field tracking state in `GameSettingManager`. |
| **`game`** | `Game)` | Operational field tracking state in `GameSettingManager`. |
| **`isEnable`** | `boolean): void` | Boolean flag indicating whether enable is enabled or active in `GameSettingManager`. |

---

## 2. State Mutation Lifecycle

All state fields in `GameSettingManager` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
