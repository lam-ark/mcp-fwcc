---
id: "cc_slot_module:GameDirector:events:global_event_bus"
title: "GameDirector Global Event Bus Integration"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "events", "global_event_bus", "GameUIEvents"]
---

# 🌐 GameDirector Global Event Bus Integration

## 1. Global Event Bus Topics

| Direction | Event Topic | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **Listens To** | `GameUIEvents.GAME_MODE.SWITCH_GAME_MODE` | `targetMode: number` | Switches active scene mode. |
| **Listens To** | `GameUIEvents.GAME_MODE.EXIT_GAME_MODE` | None | Returns to prior game mode in stack. |
| **Listens To** | `GameUIEvents.GAME_MODE.RESUME_NORMAL_GAME_MODE` | None | Emergency return to Normal Game. |
| **Listens To** | `GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS` | `data: any` | Captures authentication payload and big win tiers. |
| **Emits** | `GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI` | `mode: number` | Notifies HUD to update background themes and buttons. |
