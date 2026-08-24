---
id: "cc_slot_module:ExtraBetModule:events:global_event_bus"
title: "ExtraBetModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 ExtraBetModule Global Event Bus Specification

---

## 1. Global Events Emitted

| Event Constant | Payload | Target | Purpose |
| :--- | :--- | :--- | :--- |
| `GameLogicUIEvents.INCREASE_EXTRA_BET` | None | `GameLogic` | Requests increasing the Ante-Bet modifier level. |
| `GameLogicUIEvents.DECREASE_EXTRA_BET` | None | `GameLogic` | Requests decreasing the Ante-Bet modifier level. |
