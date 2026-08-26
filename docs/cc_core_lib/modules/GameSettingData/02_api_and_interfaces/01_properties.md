---
id: "cc_core_lib:GameSettingData:api:properties"
title: "GameSettingData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["GameSettingData", "game_setting_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `GameSettingData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`isEnableBGM`** | `boolean` | Boolean flag indicating whether enablebgm is enabled or active in `GameSettingData`. |
| **`isEnableSFX`** | `boolean` | Boolean flag indicating whether enablesfx is enabled or active in `GameSettingData`. |
| **`isEnable`** | `boolean): void` | Boolean flag indicating whether enable is enabled or active in `GameSettingData`. |
| **`isEnable`** | `boolean): void` | Boolean flag indicating whether enable is enabled or active in `GameSettingData`. |

---

## 2. State Mutation Guardrails

All state fields in `GameSettingData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
