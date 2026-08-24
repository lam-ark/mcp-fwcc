---
id: "cc_slot_module:BaseGameDirector:properties:injected_services"
title: "BaseGameDirector Injected IoC Services"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "properties", "injected_services", "ioc", "inject"]
---

# 💉 BaseGameDirector Injected IoC Services

## 1. Injected Services Reference Table

| Service Token | Injected Property | Provider Source | Role in Director |
| :--- | :--- | :--- | :--- |
| **`GameDataStore`** | `@inject(GameDataStore) dataStore` | `GameInit` on `Canvas/Director` | Reads active `playSession` data (matrices, win amounts, nextMode). |
| **`Logger`** | `@inject(Logger) logger` | `GameInit` Container | Configures stylized console tags for `ScriptExecutor` pipeline steps. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | `GameInit` on `Canvas/Director` | Evaluates speed modes (`isTurboActive`, `isFastToResult`) and updates `currentGameState`. |
