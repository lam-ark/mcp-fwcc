---
id: "cc_core_lib:CommonUtils:gotchas:common"
title: "CommonUtils Engine Gotchas & Troubleshooting"
category: "cc_core_lib"
tags: ["CommonUtils", "common_utils", "cc_core_lib", "gotchas", "troubleshooting"]
---

# ⚠️ `CommonUtils` Engine Gotchas & Troubleshooting

---

## 1. Gotcha: Memory Leaks on Fast Re-Spin & Scene Teardown
- **Symptom**: Memory consumption increases continuously or orphaned callback handles execute after scene unload.
- **Root Cause**: Uncancelled tweens, timers, or event listeners retaining references to detached `cc.Node` objects.
- **Fix**: Always invoke explicit cleanup methods (e.g. `destroy()`, `stopAllTweens()`, or `unscheduleAll()`) inside `onDestroy()`.
