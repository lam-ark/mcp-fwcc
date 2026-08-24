---
id: "cc_slot_module:SlotPaylineSchedule:events:global_event_bus"
title: "SlotPaylineSchedule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "events", "global_bus"]
---

# 🌐 SlotPaylineSchedule Global Event Bus Integration

---

## 1. Global Event Bus Emitters

| Global Topic | Payload | Purpose |
| :--- | :--- | :--- |
| `GameUIEvents.PAYLINE_INFO.ON_SHOW_PAYLINE_INFO` | `payLineInfo` | Updates bottom HUD with active line multiplier and winning credit. |
| `GameUIEvents.PAYLINE_INFO.ON_HIDE_PAYLINE_INFO` | None | Clears bottom HUD payline label upon spin start or schedule stop. |
