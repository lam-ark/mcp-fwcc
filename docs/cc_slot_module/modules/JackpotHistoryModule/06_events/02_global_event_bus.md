---
id: "cc_slot_module:JackpotHistoryModule:events:global_event_bus"
title: "JackpotHistoryModule Global Event Bus"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "events", "global"]
---

# 🌐 JackpotHistoryModule Global Event Bus

---

## 1. Global Events Emitted

| Event Name | Payload | Receiver | Purpose |
| :--- | :--- | :--- | :--- |
| `INIT_JACKPOT_HISTORY` | `{ itemPerPage, jpList }` | GameLogic | Requests jackpot winner data. |
| `REQUEST_JACKPOT_NEXT_PAGE` | None | GameLogic | Requests next page. |
| `REQUEST_JACKPOT_PREVIOUS_PAGE`| None | GameLogic | Requests previous page. |
| `CLOSE_JACKPOT_HISTORY_PANEL` | None | GameLogic | Closes popup. |
