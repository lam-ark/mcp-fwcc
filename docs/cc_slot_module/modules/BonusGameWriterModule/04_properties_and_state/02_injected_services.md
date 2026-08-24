---
id: "cc_slot_module:BonusGameWriterModule:properties:injected_services"
title: "BonusGameWriterModule Injected Services"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "properties", "injected_services"]
---

# 💉 BonusGameWriterModule Injected Services

## 1. Injected Services Reference Table

| Service Token | Injected Property | Role |
| :--- | :--- | :--- |
| **`GameDataStore`** | `@inject(GameDataStore) dataStore` | Reads `playSession.nextMode` to determine if more picks remain. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | Queries active speed preferences. |
