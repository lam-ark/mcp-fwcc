---
id: "cc_slot_module:TrialModeManager:recipes:custom_trial_demo_tutorial_setup"
title: "Recipe: Setting Up Feature Tutorial Scenarios in Demo Mode"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "recipes", "tutorial_modal"]
---

# 💡 Recipe: Setting Up Feature Tutorial Scenarios in Demo Mode

---

## 1. Node Hierarchy & Button Setup

1. Create `trialModePanel` under `Canvas/Director/TrialMode`.
2. Add `optionHolder` node containing scenario buttons:
   - Button 0: Custom Click Event invoking `playOption(event, 0)` -> Trigger Free Spins Demo
   - Button 1: Custom Click Event invoking `playOption(event, 1)` -> Trigger Bonus Game Demo
3. Set `useSelectionPanel = true` in `TrialModeManager` Inspector.
