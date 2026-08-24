---
id: "cc_slot_module:SlotTablePaylineModule:gotchas:index"
title: "SlotTablePaylineModule Engine Gotchas Index"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SlotTablePaylineModule Engine Gotchas Index

---

## 1. Known Gotchas Summary

| Gotcha Document | Symptom | Severity | Engine Subsystem |
| :--- | :--- | :--- | :--- |
| **[`01_missing_module_event_init_crash.md`](./01_missing_module_event_init_crash.md)** | `[SlotTablePaylineModule] moduleEvent is not set` error during bootstrap. | `HIGH` | IoC / Initialization |
| **[`02_desynced_table_format_payline_glitch.md`](./02_desynced_table_format_payline_glitch.md)** | Win lines misaligned or drawn outside visible reel bounds after grid expansion. | `MEDIUM` | Coordinate Geometry |
