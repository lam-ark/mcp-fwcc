---
id: "cc_slot_module:BaseGameDirector:events:global_event_bus"
title: "BaseGameDirector Global Event Bus Integration"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "events", "global_event_bus", "GameUIEvents"]
---

# 🌐 BaseGameDirector Global Event Bus Integration

## 1. Global Event Topics Emitted & Listened

| Direction | Event Topic | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **Listens To** | `GameUIEvents.GAME_MODE.SWITCH_GAME_MODE` | `{ nextMode: number }` | Triggers game mode director transition sequence. |
| **Listens To** | `GameUIEvents.BACK_TO_REAL_MODE` | None | Triggers `forceToExit()` when exiting trial demo play. |
| **Emits** | `GameUIEvents.GAME_MODE.EXIT_GAME_MODE` | None | Notifies system that current game mode has finished. |
| **Emits** | `GameUIEvents.WALLET.UPDATE_WALLET` | `{ amount: number }` | Commits payout to wallet display. |
