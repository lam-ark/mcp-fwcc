---
id: "cc_slot_mechanics:HorizontalTableConfig:game_flow:timing_execution_matrix"
title: "HorizontalTableConfig Timing & Execution Matrix"
category: "cc_slot_mechanics"
tags: ["HorizontalTableConfig", "horizontal_table_config", "cc_slot_mechanics", "game_flow", "timing_matrix"]
---

# ⏱️ HorizontalTableConfig Timing & Execution Matrix

---

## 1. Execution Timing

| Trigger / Action | Caller | Target Method | State Impact |
| :--- | :--- | :--- | :--- |
| **Startup** | Engine | `onLoad()` / `start()` | Initializes pools & config |
| **Spin Start** | Director | Reset / Roll | Clears previous round data |
| **Feature Step** | ScriptExecutor | Mechanics Action | Animates VFX & modifies state |
