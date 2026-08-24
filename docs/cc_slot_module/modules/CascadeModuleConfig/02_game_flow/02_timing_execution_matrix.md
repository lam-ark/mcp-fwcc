---
id: "cc_slot_module:CascadeModuleConfig:game_flow:timing_execution_matrix"
title: "CascadeModuleConfig Timing Execution Matrix"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ CascadeModuleConfig Timing Execution Matrix

---

## 1. Timing Constants

| Constant | Value (Normal Mode) | Value (Turbo / FTR Mode) | Purpose |
| :--- | :--- | :--- | :--- |
| `FALLING_TIME` | $0.4\text{s}$ ($0.2\text{s} \times 2$) | $0.2\text{s}$ | Duration of symbol gravity fall. |
| `DELAY_FALLING_TIME` | $0.2\text{s}$ | $0.2\text{s}$ | Near-win column suspension delay. |
| `CASCADING_TIME_COMPLETED` | $1.5\text{s}$ | $1.5\text{s}$ | Safety timeout budget per respin step. |
| `timeBouncing` | $0.3\text{s}$ | $0.1\text{s}$ | Overshoot bounce settling duration. |
