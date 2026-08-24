---
id: "cc_slot_module:NormalGameDirectorModule:properties:injected_services"
title: "NormalGameDirectorModule Injected Services"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "properties", "injected_services"]
---

# 💉 NormalGameDirectorModule Injected Services

## 1. Injected Services Reference Table

Inherited from `BaseGameDirector` & `SlotBaseModule`:

| Service Token | Property Name | Purpose |
| :--- | :--- | :--- |
| **`GameDataStore`** | `@inject(GameDataStore) dataStore` | Reads bet size, matrix, winning paylines, and wallet state. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | Tracks speed level and spin lock states. |
| **`Logger`** | `@inject(Logger) logger` | Outputs prefixed logs `[NormalGameDirectorModule]`. |
