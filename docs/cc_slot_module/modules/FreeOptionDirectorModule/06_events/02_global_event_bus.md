---
id: "cc_slot_module:FreeOptionDirectorModule:events:global_event_bus"
title: "FreeOptionDirectorModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 FreeOptionDirectorModule Global Event Bus Integration

## 1. Global Events Emitted

| Event Constant | Payload | Target Subsystem | Description |
| :--- | :--- | :--- | :--- |
| **`GameLogicUIEvents.SEND_FREE_OPTION_REQUEST`** | `selectedOption: number` | `GameLogic` / Network Layer | Sends player's volatility / spin option choice to server. |
