---
id: "cc_slot_module:SpinTimesModule:events:global_event_bus"
title: "SpinTimesModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 SpinTimesModule Global Event Bus Specification

---

## 1. Global Events Emitted

| Event Constant | Payload | Target | Purpose |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.SPIN_TIMES.SET_UP_SPIN_TIMES` | `{ gameMode, node }` | `GameModeDirectorModule` | Registers spin times badge with Director during initialization. |
