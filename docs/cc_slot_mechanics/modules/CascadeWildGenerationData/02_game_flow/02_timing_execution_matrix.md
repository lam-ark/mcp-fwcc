---
id: "cc_slot_mechanics:CascadeWildGenerationData:game_flow:timing_execution_matrix"
title: "CascadeWildGenerationData Timing & Execution Matrix"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationData", "cascade_wild_generation_data", "cc_slot_mechanics", "game_flow", "timing_matrix"]
---

# ⏱️ CascadeWildGenerationData Timing & Execution Matrix

---

## 1. Execution Timing

| Trigger / Action | Caller | Target Method | State Impact |
| :--- | :--- | :--- | :--- |
| **Startup** | Engine | `onLoad()` / `start()` | Initializes pools & config |
| **Spin Start** | Director | Reset / Roll | Clears previous round data |
| **Feature Step** | ScriptExecutor | Mechanics Action | Animates VFX & modifies state |
