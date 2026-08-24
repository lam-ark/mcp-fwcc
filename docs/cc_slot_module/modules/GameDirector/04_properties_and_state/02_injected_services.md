---
id: "cc_slot_module:GameDirector:properties:injected_services"
title: "GameDirector Injected IoC Services"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "properties", "injected_services"]
---

# 💉 GameDirector Injected IoC Services

## 1. Injected Services Reference Table

| Service Token | Injected Property | Purpose |
| :--- | :--- | :--- |
| **`GameDataStore`** | `@inject(GameDataStore) dataStore` | Tracks and updates `currentGameMode`. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | Stores `isJoinGameSuccess` and `bigWinConfig`. |
| **`GameConfig`** | `@inject(GameConfig) gameConfig` | Reads `BACK_TO_REAL_MODE_DELAY_TIME`. |
| **`MoneyTween`** | `@inject(MoneyTween) moneyTween` | Manages running wallet rolling tweens across mode switches. |
| **`Logger`** | `@inject(Logger) logger` | Outputs prefixed logs `[GameView] [Director]`. |
