---
id: "cc_slot_module:GameModeDirectorModule:properties:injected_services"
title: "GameModeDirectorModule Injected IoC Services"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "properties", "injected_services", "ioc", "inject"]
---

# 💉 GameModeDirectorModule Injected IoC Services

## 1. Injected Services Reference Table

| Service Token | Injected Property | Provider Source | Role in Mode Director |
| :--- | :--- | :--- | :--- |
| **`GameDataStore`** | `@inject(GameDataStore) dataStore` | `GameInit` on `Canvas/Director` | Parses state packets (`onStateUpdate`), reads `winAmount`, `payLines`, `isResume`. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | `GameInit` on `Canvas/Director` | Checks `isAutoSpin`, `isTurboActive`, and mutates speed via `onFastToResult()`. |
| **`Logger`** | `@inject(Logger) logger` | `GameInit` Container | Attaches stylized logging prefix `[ModuleEvent]`. |
