---
id: "cc_slot_mechanics:SlotTableMegaModule:game_flow:timing_execution_matrix"
title: "SlotTableMegaModule Timing & Execution Matrix"
category: "cc_slot_mechanics"
tags: ["SlotTableMegaModule", "slot_table_mega_module", "cc_slot_mechanics", "game_flow", "timing_matrix"]
---

# ⏱️ SlotTableMegaModule Timing & Execution Matrix

---

## 1. Execution Timing

| Trigger / Action | Caller | Target Method | State Impact |
| :--- | :--- | :--- | :--- |
| **Startup** | Engine | `onLoad()` / `start()` | Initializes pools & config |
| **Spin Start** | Director | Reset / Roll | Clears previous round data |
| **Feature Step** | ScriptExecutor | Mechanics Action | Animates VFX & modifies state |
