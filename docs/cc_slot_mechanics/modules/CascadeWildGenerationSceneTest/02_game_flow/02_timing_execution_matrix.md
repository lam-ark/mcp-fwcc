---
id: "cc_slot_mechanics:CascadeWildGenerationSceneTest:game_flow:timing_execution_matrix"
title: "CascadeWildGenerationSceneTest Timing & Execution Matrix"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationSceneTest", "cascade_wild_generation_scene_test", "cc_slot_mechanics", "game_flow", "timing_matrix"]
---

# ⏱️ CascadeWildGenerationSceneTest Timing & Execution Matrix

---

## 1. Execution Timing

| Trigger / Action | Caller | Target Method | State Impact |
| :--- | :--- | :--- | :--- |
| **Startup** | Engine | `onLoad()` / `start()` | Initializes pools & config |
| **Spin Start** | Director | Reset / Roll | Clears previous round data |
| **Feature Step** | ScriptExecutor | Mechanics Action | Animates VFX & modifies state |
