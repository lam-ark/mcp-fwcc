---
id: "cc_slot_module:BonusGameItemModule:properties:injected_services"
title: "BonusGameItemModule Injected Services"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "properties", "injected_services"]
---

# 💉 BonusGameItemModule Injected Services

## 1. Injected Services Reference Table

| Service Token | Injected Property | Role |
| :--- | :--- | :--- |
| **`SlotSoundPlayerModule`** | `@inject(SlotSoundPlayerModule) soundPlayer` | Plays `soundBoxClick` and `soundBoxOpen` SFX. |
| **`GameEventManager`** | `@inject(GameEventManager) eventManager` | Dispatches score notifications. |
