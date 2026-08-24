---
id: "cc_slot_module:TrialModeManager:game_flow:spin_phase_breakdown"
title: "TrialModeManager Game Flow Breakdown"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 TrialModeManager Game Flow Breakdown

---

## 1. Game Flow States

| State / Mode | TrialModeManager Action |
| :--- | :--- |
| **Normal Game (Real Money)** | Hidden (`trialModel.isPopupDisplay = false`). |
| **Trial Mode Entry** | Prompts scenario panel if `useSelectionPanel = true`. |
| **Scenario Executing** | Hides panel, runs selected script in slot reels. |
| **Trial Mode Exit** | Restores real wallet balance and returns to standard HUD. |
