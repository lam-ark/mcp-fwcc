---
id: "cc_core_lib:SpinButtonNormalManager:gotchas:common"
title: "SpinButtonNormalManager Engine Gotchas & Troubleshooting"
category: "cc_core_lib"
tags: ["SpinButtonNormalManager", "spin_button_normal_manager", "cc_core_lib", "gotchas", "troubleshooting"]
---

# ⚠️ `SpinButtonNormalManager` Engine Gotchas & Troubleshooting

---

## 1. Gotcha: Memory Leaks on Fast Re-Spin & Scene Teardown
- **Symptom**: Memory consumption increases continuously or orphaned callback handles execute after scene unload.
- **Root Cause**: Uncancelled tweens, timers, or event listeners retaining references to detached `cc.Node` objects.
- **Fix**: Always invoke explicit cleanup methods (e.g. `destroy()`, `stopAllTweens()`, or `unscheduleAll()`) inside `onDestroy()`.

---

## 2. Gotcha: Unhandled Asynchronous Pipeline Interruption
- **Symptom**: Game table freezes during fast-stop or skip click.
- **Root Cause**: A Promise within the execution chain never resolved because the target animation was skipped abruptly.
- **Fix**: Ensure all action scripts wrap async calls in timeout protection or listen for `FAST_STOP` events.
