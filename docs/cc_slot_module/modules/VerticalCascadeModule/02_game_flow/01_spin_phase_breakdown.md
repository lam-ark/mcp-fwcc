---
id: "cc_slot_module:VerticalCascadeModule:game_flow:spin_phase_breakdown"
title: "VerticalCascadeModule Behavior Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 VerticalCascadeModule Behavior Across Spin Loop Phases

---

## 1. Spin Phase Breakdown

| Spin Phase | Cascade Operation | State & Visual Changes |
| :--- | :--- | :--- |
| **Phase 1: Spin Start** | Idle / `clearSymbols()`. | All temporary cascade symbols returned to pool. |
| **Phase 2: Reels Stopped** | Idle. | Table displays standard base grid. |
| **Phase 3: Cascade Step - Elimination** | `startRespin()` executed on `TABLE_START_RESPIN`. | Winning tiles disappear; empty gaps created. |
| **Phase 4: Cascade Step - Drop & Inflow** | `stopRespin()` executed on `TABLE_STOP_RESPIN`. | Surviving symbols tumble down; new symbols enter from top with bounce easing. |
| **Phase 5: Cascade Complete** | Promise resolved; pipeline evaluates next win combination. | Visual grid settled at final matrix state. |
