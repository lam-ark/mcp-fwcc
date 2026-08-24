---
id: "cc_slot_module:PaylineInfoModule:game_flow:spin_phase_breakdown"
title: "PaylineInfoModule Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 PaylineInfoModule Execution Across Spin Phases

---

## 1. Phase Breakdown

| Phase / State | PaylineInfoModule Behavior |
| :--- | :--- |
| **Spin Start** | `hidePaylineInfo()` -> Deactivates toast node. |
| **Reels Rolling** | Inactive (`node.active = false`). |
| **Line Presentation** | Displays toast per winning line step, synchronized with `PaylineLineModule`. |
| **Idle Settle** | Displays toast during idle line looping. |
