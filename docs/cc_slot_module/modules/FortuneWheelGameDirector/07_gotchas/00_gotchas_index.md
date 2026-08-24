---
id: "cc_slot_module:FortuneWheelGameDirector:gotchas:index"
title: "FortuneWheelGameDirector Gotchas & Engine Pitfalls Index"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "gotchas", "engine_defects", "index"]
---

# ⚠️ FortuneWheelGameDirector Gotchas & Pitfalls Index

---

## 1. Known Gotchas & Engine Pitfalls Summary Table

| Gotcha Document | Symptom | Root Cause | Fix Strategy |
| :--- | :--- | :--- | :--- |
| **[`01_missing_stop_spin_wheel_hang.md`](./01_missing_stop_spin_wheel_hang.md)** | Wheel spins forever and never stops. | Socket response failed to invoke `_showWheelResult` or writer script omitted command. | Ensure server error handler emits fallback result or invokes mode recovery. |
| **[`02_turbo_timing_desync_on_fast_stop.md`](./02_turbo_timing_desync_on_fast_stop.md)** | Fast stop triggers before wheel accelerates, resulting in snap jump. | Calling `_fastStopWheel()` during acceleration phase before constant velocity. | Guard fast stop in `FortuneWheelModule` until minimum acceleration curve completes. |
