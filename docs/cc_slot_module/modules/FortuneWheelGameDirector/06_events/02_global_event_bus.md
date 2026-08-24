---
id: "cc_slot_module:FortuneWheelGameDirector:events:global_event_bus"
title: "FortuneWheelGameDirector Global Event Bus (eventManager & gameLogic)"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "events", "global_events", "eventManager", "gameLogic"]
---

# 🌐 FortuneWheelGameDirector Global Event Bus (`eventManager` & `gameLogic`)

---

## 1. Network & GameLogic Dispatches (`this.gameLogic.emit`)

| Event Constant | Payload | Trigger Method | Purpose |
| :--- | :--- | :--- | :--- |
| `GameLogicUIEvents.SEND_BONUS_GAME_REQUEST` | `0` | `onSpinWheel()` | Transmits bonus round action request to game server websocket. |

---

## 2. Global Event Bus Interfacing (`this.eventManager`)

| Event Topic | Direction | Related Method | Purpose |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.SHOW_CUTSCENE` | Emitted | Mode transition / Win Cutscene | Displays Big Win or transition overlays when wheel settles. |
| `SlotCustomEvent.CHANGE_GAME_MODE` | Listened / Handled | Mode Transition | Triggers entering or leaving FortuneWheel mode. |
