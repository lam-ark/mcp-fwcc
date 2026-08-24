---
id: "cc_slot_module:SlotReelModule:gotchas:index"
title: "SlotReelModule Gotchas & Engine Pitfalls Index"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "gotchas", "engine_defects", "index"]
---

# ⚠️ SlotReelModule Gotchas & Engine Pitfalls Index

---

## 1. Known Gotchas & Engine Pitfalls Summary Table

| Gotcha Document | Symptom | Root Cause | Fix Strategy |
| :--- | :--- | :--- | :--- |
| **[`01_reel_bounce_tween_interrupt_hang.md`](./01_reel_bounce_tween_interrupt_hang.md)** | Spin loop freezes on reel stop; `SlotTableModule` never receives `reelStopCB`. | Fast stop interrupting `playStopAnimation()` tween before callback runs. | Always invoke `reelStopCB` inside `resetReel()` if tween was force-stopped. |
| **[`02_buffer_top_popin_visual_glitch.md`](./02_buffer_top_popin_visual_glitch.md)** | Symbols visibly pop into existence at top of table mask during roll. | `BUFFER_TOP` size smaller than column scroll distance per frame. | Set `BUFFER_TOP >= 2` in `TableModuleConfig`. |
