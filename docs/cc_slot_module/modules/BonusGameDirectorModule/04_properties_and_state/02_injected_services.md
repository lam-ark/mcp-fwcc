---
id: "cc_slot_module:BonusGameDirectorModule:properties:injected_services"
title: "BonusGameDirectorModule Injected Services"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "properties", "injected_services"]
---

# 💉 BonusGameDirectorModule Injected Services

## 1. Injected Services Reference Table

| Service Token | Injected Property | Role |
| :--- | :--- | :--- |
| **`GameDataStore`** | `@inject(GameDataStore) dataStore` | Reads `playSession.jackpot` and `getJackpotInfo()`. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | Queries active speed preferences. |
| **`Logger`** | `@inject(Logger) logger` | Outputs prefixed logs `[BonusGameDirectorModule]`. |
