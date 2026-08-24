---
id: "cc_slot_module:TurboButton:events:global_event_bus"
title: "TurboButton Global Event Bus Specification"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "events", "global_bus"]
---

# 🌐 TurboButton Global Event Bus Specification

---

## 1. Global Events

### Events Subscribed
| Event Constant | Payload | Purpose |
| :--- | :--- | :--- |
| `GameUIEvents.TURBO.LOAD_CACHE_TURBO` | None | Rehydrates stored user Turbo preferences on startup. |

### Events Emitted
| Event Constant | Payload | Target | Purpose |
| :--- | :--- | :--- | :--- |
| `GameLogicUIEvents.TURBO_BUTTON_CLICK` | None | `GameLogic` | Toggles model active state. |
| `GameLogicUIEvents.TURBO_BUTTON_HOVER` | None | `GameLogic` | Pointer hover notification. |
| `GameLogicUIEvents.TURBO_BUTTON_EXIT_HOVER`| None | `GameLogic` | Pointer exit hover notification. |
| `GameLogicUIEvents.TURBO_BUTTON_PRESSED` | None | `GameLogic` | Touch press start. |
| `GameLogicUIEvents.TURBO_BUTTON_CANCEL` | None | `GameLogic` | Touch canceled. |
