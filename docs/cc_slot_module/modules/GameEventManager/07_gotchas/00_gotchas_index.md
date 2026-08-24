---
id: "cc_slot_module:GameEventManager:gotchas:index"
title: "GameEventManager Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "gotchas", "engine_defects", "index"]
---

# ⚠️ GameEventManager Gotchas & Engine Defects Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_missing_target_off_leak`](./01_missing_target_off_leak.md)** | Subscribing to global event bus without calling `targetOff(this)` in `onDestroy()` causes persistent memory leak. | `GameEventManager` maintains strong object references to callback contexts in its hash table. | 🔴 Critical (Memory Leak & Zombie Callbacks) |
| **[`02_async_promise_rejection_in_emit`](./02_async_promise_rejection_in_emit.md)** | Unhandled promise rejection in an async listener halting `Promise.all()` execution. | `try/catch` in `emit()` only catches sync errors; async errors return rejected Promises. | 🟠 High (Spin Sequence Hang) |
