---
id: "cc_slot_module:UIManagerModule:events:global_event_bus"
title: "UIManagerModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 UIManagerModule Global Event Bus Specification

---

## 1. Global Events Subscribed

| Event Constant | Payload | Source | Purpose |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI` | `gameMode: number` | `GameModeDirectorModule` | Triggers dynamic layout swap. |
