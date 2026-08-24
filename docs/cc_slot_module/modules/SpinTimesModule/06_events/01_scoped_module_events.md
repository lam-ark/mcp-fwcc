---
id: "cc_slot_module:SpinTimesModule:events:scoped_module_events"
title: "SpinTimesModule Scoped Events"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 SpinTimesModule Scoped Events

---

## 1. Local Scoped Events Subscribed

| Event Name | Source | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| `UPDATE_SPINTIMES` | `Director` / `Writer` | `spinTimes: number` | Pushes remaining round count to display. |
| `RESET_SPINTIMES` | `Director` / `Writer` | None | Clears label string and deactivates badge. |
