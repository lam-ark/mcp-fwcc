---
id: "cc_slot_module:SlotTableNearWinModule:events:scoped_module_events"
title: "SlotTableNearWinModule Scoped Node Events"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 SlotTableNearWinModule Scoped Node Events

---

## 1. Node Event Listeners

`SlotTableNearWinModule` listens to scoped events dispatched on `this.node` (the Table container node) by `SlotTableModule`:

| Event Name | Payload | Handler | Purpose |
| :--- | :--- | :--- | :--- |
| `SETUP_NEARWIN` | `{ isTurboActive, matrix, context }` | `setupNearWin` | Pre-calculates anticipation flags and extends reel spin time. |
| `REEL_STOP_NEARWIN` | `{ reelCount, context }` | `reelStopNearWin` | Checks if anticipation VFX should activate on the next reel. |
| `PRE_REEL_STOP_NEARWIN`| None | `reelPreStopNearWin` | Hook invoked immediately before easing stop. |
| `RESET_NEARWIN` | None | `resetNearWin` | Cleans up anticipation overlays and stops tension audio. |
