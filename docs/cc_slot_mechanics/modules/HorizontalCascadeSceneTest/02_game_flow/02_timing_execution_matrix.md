---
id: "cc_slot_mechanics:HorizontalCascadeSceneTest:game_flow:timing_execution_matrix"
title: "HorizontalCascadeSceneTest Timing & Execution Matrix"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeSceneTest", "horizontal_cascade_scene_test", "cc_slot_mechanics", "game_flow", "timing_matrix"]
---

# ⏱️ HorizontalCascadeSceneTest Timing & Execution Matrix

---

## 1. Execution Timing

| Trigger / Action | Caller | Target Method | State Impact |
| :--- | :--- | :--- | :--- |
| **Startup** | Engine | `onLoad()` / `start()` | Initializes pools & config |
| **Spin Start** | Director | Reset / Roll | Clears previous round data |
| **Feature Step** | ScriptExecutor | Mechanics Action | Animates VFX & modifies state |
