---
id: "cc_slot_module:SlotTableNearWinModule:gotchas:index"
title: "SlotTableNearWinModule Engine Gotchas Index"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SlotTableNearWinModule Engine Gotchas Index

---

## 1. Known Gotchas Summary

| Gotcha Document | Symptom | Severity | Engine Subsystem |
| :--- | :--- | :--- | :--- |
| **[`01_nearwin_sound_stuck_on_ftr.md`](./01_nearwin_sound_stuck_on_ftr.md)** | Tension audio loops indefinitely after fast-stopping a near-win spin. | `CRITICAL` | Audio / State Machine |
| **[`02_missing_spine_animation_fallback.md`](./02_missing_spine_animation_fallback.md)** | Null pointer exception when `useSpine: true` but `sp.Skeleton` is missing. | `HIGH` | Visual Rendering |
