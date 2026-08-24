---
id: "cc_slot_module:NormalGameDirectorModule:properties:inspector_properties"
title: "NormalGameDirectorModule Inspector Properties"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ NormalGameDirectorModule Inspector Properties

## 1. Inspector Properties Reference Table

Inherited from `GameModeDirectorModule`:

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`gameMode`** | `GAME_MODE_ENUM` | `NORMAL_GAME` (`1`) | Identifies the Base Game mode. |
| **`moduleList`** | `cc.Node[]` | `[]` | Child visual nodes receiving scoped `GameModuleEvent` broadcasts. |
| **`canSkipResult`** | `boolean` | `true` | Enables fast-forwarding line animations when player touches screen. |
