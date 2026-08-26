---
id: "cc_slot_mechanics:CascadeWildGenerationModule:game_flow:timing_execution_matrix"
title: "CascadeWildGenerationModule Timing & Execution Matrix"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "game_flow", "timing_matrix"]
---

# ⏱️ CascadeWildGenerationModule Timing & Execution Matrix

---

## 1. Execution Timing

| Trigger / Action | Caller | Target Method | State Impact |
| :--- | :--- | :--- | :--- |
| **Startup** | Engine | `onLoad()` / `start()` | Initializes pools & config |
| **Spin Start** | Director | Reset / Roll | Clears previous round data |
| **Feature Step** | ScriptExecutor | Mechanics Action | Animates VFX & modifies state |
