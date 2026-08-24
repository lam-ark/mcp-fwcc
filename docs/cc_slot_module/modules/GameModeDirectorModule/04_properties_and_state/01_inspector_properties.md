---
id: "cc_slot_module:GameModeDirectorModule:properties:inspector_properties"
title: "GameModeDirectorModule Inspector Properties"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "properties", "inspector", "gameMode", "moduleList"]
---

# 🎛️ GameModeDirectorModule Inspector Properties

## 1. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Purpose & Usage |
| :--- | :--- | :--- | :--- |
| **`gameMode`** | `GAME_MODE_ENUM` | `NORMAL_GAME` (`1`) | Enum identifier marking whether this director governs Normal (`1`), Free (`2`), or Bonus (`4`) game mode. |
| **`moduleList`** | `cc.Node[]` | `[]` | Array of child/sibling module nodes injected with this director's private `GameModuleEvent` bus during `setupModules()`. |
