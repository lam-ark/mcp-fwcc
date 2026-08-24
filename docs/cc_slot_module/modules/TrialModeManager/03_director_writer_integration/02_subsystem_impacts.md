---
id: "cc_slot_module:TrialModeManager:director_writer:subsystem_impacts"
title: "TrialModeManager Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 TrialModeManager Cross-Subsystem Impacts

---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`UIManagerModule`** | Toggles `isTrialModeActive` across all HUD submodules. |
| **`WalletModule`** | Displays `trialWallet` instead of `realWallet`. |
| **`SlotGameSettings`** | Sets `isTrialMode = true`. |
