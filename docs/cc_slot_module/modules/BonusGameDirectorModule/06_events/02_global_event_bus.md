---
id: "cc_slot_module:BonusGameDirectorModule:events:global_event_bus"
title: "BonusGameDirectorModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 BonusGameDirectorModule Global Event Bus Integration

## 1. Global Events (`this.eventManager` & `this.gameLogic`)

| Event Topic | Direction | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **`GameLogicUIEvents.SEND_BONUS_GAME_REQUEST`** | Emits (`gameLogic`) | `itemId: number` | Sends selected chest ID to backend server. |
| **`GameUIEvents.CUTSCENES.PLAY_CUTSCENE`** | Emits (`eventManager`) | `{ cutsceneType, cutsceneData }` | Plays `TOTAL_WIN` or `JACKPOT_WIN` celebration dialog. |
| **`GameUIEvents.GAME_MODE.EXIT_GAME_MODE`** | Emits (`eventManager`) | None | Signals `GameDirector` to exit bonus mode. |
