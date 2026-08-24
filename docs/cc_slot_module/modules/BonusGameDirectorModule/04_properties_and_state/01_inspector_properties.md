---
id: "cc_slot_module:BonusGameDirectorModule:properties:inspector_properties"
title: "BonusGameDirectorModule Inspector Properties"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ BonusGameDirectorModule Inspector Properties

## 1. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`labelCountDown`** | `cc.Label` | `null` | Label node displaying auto-pick countdown timer. |
| **`defaultCountDown`** | `number` | `15` | Default duration (in seconds) before auto-selection triggers. |
| **`gameMode`** | `GAME_MODE_ENUM` | `BONUS_GAME` (`4`) | Mode identifier enum. |
| **`moduleList`** | `cc.Node[]` | `[]` | Array of child chest/item manager components. |
