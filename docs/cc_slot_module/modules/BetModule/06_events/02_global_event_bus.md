---
id: "cc_slot_module:BetModule:events:global_event_bus"
title: "BetModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 BetModule Global Event Bus Specification

---

## 1. Global Events Emitted

| Event Constant | Payload | Target | Purpose |
| :--- | :--- | :--- | :--- |
| `GameLogicUIEvents.INCREASE_BET` | None | `GameLogic` | Requests moving to the next higher bet tier. |
| `GameLogicUIEvents.DECREASE_BET` | None | `GameLogic` | Requests moving to the next lower bet tier. |
