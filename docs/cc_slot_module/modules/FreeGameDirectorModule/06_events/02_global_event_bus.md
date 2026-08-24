---
id: "cc_slot_module:FreeGameDirectorModule:events:global_event_bus"
title: "FreeGameDirectorModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 FreeGameDirectorModule Global Event Bus Integration

## 1. Global Events Emitted

| Event Constant | Payload | Role |
| :--- | :--- | :--- |
| **`GameUIEvents.GAME_MODE.EXIT_GAME_MODE`** | None | Signals transition back to Base Game. |
| **`GameUIEvents.WIN_AMOUNT.UPDATE_WIN_AMOUNT`** | `{ winAmount }` | Updates cumulative win number display. |
| **`GameUIEvents.CUTSCENES.PLAY_CUTSCENE`** | `{ cutsceneType: TOTAL_WIN }` | Displays the final summary dialog. |
