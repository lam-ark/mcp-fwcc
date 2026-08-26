---
id: "cc_slot_mechanics:TableGigabloxModuleTest:game_flow:timing_execution_matrix"
title: "TableGigabloxModuleTest Timing & Execution Matrix"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModuleTest", "table_gigablox_module_test", "cc_slot_mechanics", "game_flow", "timing_matrix"]
---

# ⏱️ TableGigabloxModuleTest Timing & Execution Matrix

---

## 1. Execution Timing

| Trigger / Action | Caller | Target Method | State Impact |
| :--- | :--- | :--- | :--- |
| **Startup** | Engine | `onLoad()` / `start()` | Initializes pools & config |
| **Spin Start** | Director | Reset / Roll | Clears previous round data |
| **Feature Step** | ScriptExecutor | Mechanics Action | Animates VFX & modifies state |
