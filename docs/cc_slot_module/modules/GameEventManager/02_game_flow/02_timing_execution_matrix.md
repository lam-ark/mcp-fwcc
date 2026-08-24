---
id: "cc_slot_module:GameEventManager:game_flow:timing_execution_matrix"
title: "GameEventManager Timing & Resolution Matrix"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ GameEventManager Timing & Resolution Matrix

## 1. Execution Timing Matrix

| Listener Type | Return Value | Resolution Behavior | Total `emit()` Duration |
| :--- | :--- | :--- | :--- |
| **Synchronous Function** | `void` / `undefined` | Wrapped in `Promise.resolve()` | `0ms` |
| **Asynchronous Function** | `Promise<void>` (e.g. `2000ms`) | Awaited inside `Promise.all()` | Maximum duration of slowest listener (`max(T)`) |
| **Throwing Function** | Throws `Error` | Caught in `try/catch`, logged to error, resolved to `Promise.resolve()` | `0ms` (Does not break other listeners) |
| **No Listeners Registered** | N/A | Logs warning and returns `Promise.resolve()` | `0ms` |
