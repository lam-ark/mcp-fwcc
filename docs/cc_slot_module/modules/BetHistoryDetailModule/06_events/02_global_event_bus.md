---
id: "cc_slot_module:BetHistoryDetailModule:events:global_event_bus"
title: "BetHistoryDetailModule Global Event Bus"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "events", "global"]
---

# 🌐 BetHistoryDetailModule Global Event Bus

---

## 1. Global Events Listened

| Event Name | Source | Handler | Purpose |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.BET_HISTORY.ON_SCROLL_CLICK` | `ScrollModeItem` | `onScrollClick(index)` | Direct tab navigation click. |

---

## 2. Global Events Emitted

| Event Name | Payload | Handler / Receiver | Purpose |
| :--- | :--- | :--- | :--- |
| `GameLogicUIEvents.INIT_BET_DETAIL` | `data: any` | Game Logic Service | Requests full step-by-step history payload. |
| `GameLogicUIEvents.BET_DETAIL_NEXT_PAGE` | None | Game Logic Service | Advances to subsequent round step. |
| `GameLogicUIEvents.BET_DETAIL_PREVIOUS_PAGE`| None | Game Logic Service | Moves to previous round step. |
| `GameLogicUIEvents.REQUEST_BET_DETAIL_DATA_PAGE`| `index: number`| Game Logic Service | Requests data at specific step index. |
| `GameLogicUIEvents.CLOSE_BET_HISTORY_DETAIL_PANEL`| None | Game Logic Service | Closes detail replay and returns to list. |
