---
id: "cc_slot_module:JackpotModule:events:global_event_bus"
title: "JackpotModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 JackpotModule Global Event Bus Specification

---

## 1. Global Events Subscribed

| Event Constant | Payload | Source | Purpose |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.JACKPOT.PAUSE_JACKPOT` | None | `JackpotWinModule` | Pauses progressive pool ticking. |
| `GameUIEvents.JACKPOT.RESUME_JACKPOT` | None | `JackpotWinModule` | Resumes progressive pool ticking. |
| `GameUIEvents.JACKPOT.UPDATE_JACKPOT_VALUE` | `{ jackpotType, jackpotValue }` | Server/Backend | Direct override for a specific jackpot tier pool. |
