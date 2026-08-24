---
id: "cc_slot_module:WinAmountModule:events:global_event_bus"
title: "WinAmountModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 WinAmountModule Global Event Bus Specification

---

## 1. Global Events Subscribed

| Event Constant | Payload | Purpose |
| :--- | :--- | :--- |
| `GameUIEvents.WIN_AMOUNT.UPDATE_WIN_AMOUNT` | `{ winAmount, time, winLevel }` | Runs animated rolling number count-up. |
| `GameUIEvents.WIN_AMOUNT.FAST_UPDATE_WIN_AMOUNT` | `{ winAmount, time }` | Speeds up count-up to target on player skip. |
| `GameUIEvents.WIN_AMOUNT.CLEAR_WIN_AMOUNT` | None | Instantly zeroes label and stops effects. |
| `GameUIEvents.WIN_AMOUNT.FADE_OUT_NUMBER` | `time?: number` | Smoothly fades out label opacity. |
| `GameUIEvents.WIN_AMOUNT.SYNC_WIN_AMOUNT` | `value?: number` | Hydrates last win amount on reconnect. |
