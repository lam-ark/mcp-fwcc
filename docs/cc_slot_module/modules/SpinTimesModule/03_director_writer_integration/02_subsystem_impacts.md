---
id: "cc_slot_module:SpinTimesModule:director_writer:subsystem_impacts"
title: "SpinTimesModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SpinTimesModule Cross-Subsystem Impacts

---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`UIManagerModule`** | Controls node visibility via `showNormalSpinControls()` / `showFreeSpinControls()`. |
| **`FreeGameDirectorModule`** | Emits `UPDATE_SPINTIMES` to decrement remaining free spins. |
| **`SlotButtonNormal`** | Triggers `updateState` when button returns to `NORMAL` state. |
