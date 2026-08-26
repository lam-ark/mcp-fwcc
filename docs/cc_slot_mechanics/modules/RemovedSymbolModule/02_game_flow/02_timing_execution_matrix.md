---
id: "cc_slot_mechanics:RemovedSymbolModule:game_flow:timing_execution_matrix"
title: "RemovedSymbolModule Timing & Execution Matrix"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "game_flow", "timing_matrix"]
---

# ⏱️ RemovedSymbolModule Timing & Execution Matrix

---

## 1. Execution Timing

| Trigger / Action | Caller | Target Method | State Impact |
| :--- | :--- | :--- | :--- |
| **Startup** | Engine | `onLoad()` / `start()` | Initializes pools & config |
| **Spin Start** | Director | Reset / Roll | Clears previous round data |
| **Feature Step** | ScriptExecutor | Mechanics Action | Animates VFX & modifies state |
