---
id: "cc_slot_module:WaitingSceneModule:game_flow:timing_execution_matrix"
title: "WaitingSceneModule Timing Matrix"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ WaitingSceneModule Timing Matrix

| Event | Caller | Method | Result |
| :--- | :--- | :--- | :--- |
| **Start** | Engine | `start()` ➔ `setupObserver()` | Subscribes to `WaitingSceneData` |
| **Network Lag** | Network Model | `showWaitingScene(true)` | Shows spinner (`opacity = 255`) |
| **Packet Received** | Network Model | `showWaitingScene(false)` | Hides spinner (`opacity = 0`) |
| **Scene Exit** | Engine | `onDestroy()` | Releases observer bindings |
