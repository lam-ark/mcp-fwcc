---
id: "cc_slot_module:PaylineInfoModule:events:global_event_bus"
title: "PaylineInfoModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 PaylineInfoModule Global Event Bus Specification

---

## 1. Global Events Subscribed

| Event Constant | Payload | Source | Purpose |
| :--- | :--- | :--- | :--- |
| `ON_SHOW_PAYLINE_INFO` | `paylineInfo: any` | `PaylineControllerModule` | Displays payline metadata toast. |
| `ON_HIDE_PAYLINE_INFO` | None | `PaylineControllerModule` | Hides payline metadata toast. |
