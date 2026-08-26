---
id: "cc_core_lib:JackpotHistoryManager:gotchas:common"
title: "JackpotHistoryManager Engine Gotchas & Troubleshooting"
category: "cc_core_lib"
tags: ["JackpotHistoryManager", "jackpot_history_manager", "cc_core_lib", "gotchas", "troubleshooting"]
---

# ⚠️ `JackpotHistoryManager` Engine Gotchas & Troubleshooting

---

## 1. Gotcha: Memory Leaks on Fast Re-Spin & Scene Teardown
- **Symptom**: Memory consumption increases continuously or orphaned callback handles execute after scene unload.
- **Root Cause**: Uncancelled tweens, timers, or event listeners retaining references to detached `cc.Node` objects.
- **Fix**: Always invoke explicit cleanup methods (e.g. `destroy()`, `stopAllTweens()`, or `unscheduleAll()`) inside `onDestroy()`.
