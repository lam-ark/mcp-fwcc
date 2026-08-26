---
id: "cc_core_lib:BetHistoryDetailManagerBase:gotchas:common"
title: "BetHistoryDetailManagerBase Engine Gotchas & Troubleshooting"
category: "cc_core_lib"
tags: ["BetHistoryDetailManagerBase", "bet_history_detail_manager_base", "cc_core_lib", "gotchas", "troubleshooting"]
---

# ⚠️ `BetHistoryDetailManagerBase` Engine Gotchas & Troubleshooting

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
