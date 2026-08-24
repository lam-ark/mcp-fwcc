---
id: "cc_slot_module:CascadeModuleData:game_flow:spin_phase_breakdown"
title: "CascadeModuleData Data Flow Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 CascadeModuleData Data Flow Across Spin Loop Phases

---

## 1. Spin Phase Operations

| Spin Phase | Reactive Operations | State Transformations |
| :--- | :--- | :--- |
| **Phase 1: Spin Start** | `traceWay` cleared from store. | Stale elimination masks reset. |
| **Phase 2: Reels Stopped** | Stores initial spin matrix packet. | Prepared for win evaluation. |
| **Phase 3: Cascade Respin Step N** | Receives updated `matrix` & `traceWay`. | `formatData()` generates new elimination map. |
| **Phase 4: Cascade Loop End** | `traceWay` empty (`[]`). | Respin sequence terminates cleanly. |
