---
id: "cc_slot_module:SpinTimesModule:game_flow:spin_phase_breakdown"
title: "SpinTimesModule Spin Phase Lifecycle"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 SpinTimesModule Spin Phase Lifecycle

---

## 1. Phase Breakdown

| Mode / Phase | SpinTimesModule Behavior |
| :--- | :--- |
| **Idle Normal Game** | Hidden (`node.active = false`). |
| **Auto Spin Active** | Visible, displays remaining auto-spins countdown. |
| **Free Spins Active**| Visible, displays remaining free spins countdown. |
| **Rounds Finished** | Invokes `resetSpinTimes()`, clears text, and hides. |
