---
id: "cc_slot_module:CascadeModuleConfig:game_flow:spin_phase_breakdown"
title: "CascadeModuleConfig Parameters Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 CascadeModuleConfig Parameters Across Spin Loop Phases

---

## 1. Parameter Access Matrix

| Spin Phase | Accessed Parameter | Usage |
| :--- | :--- | :--- |
| **Initial Spin Start** | `CASCADE_TABLE_CONFIG` | Grid format geometry initialization. |
| **Cascade Evaluation** | `DROP_SYMBOL_CODE` (`'-1'`) | Marking eliminated symbols from `traceWay`. |
| **Cascade Tumble Drop**| `FALLING_TIME`, `DELAY_FALLING_TIME` | Calculating tween durations and near-win pauses. |
| **Cascade Step Resolution**| `CASCADING_TIME_COMPLETED` | Safety timeout for `scheduleOnce` callback. |
