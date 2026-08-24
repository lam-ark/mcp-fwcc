---
id: "cc_slot_module:TrialModeManager:gotchas:trial_panel_selection_lockout"
title: "Gotcha: Panel Lockout on Skipped Scenarios"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "gotchas", "lockout"]
---

# ⚠️ Gotcha: Panel Lockout on Skipped Scenarios

---

## 1. Problem Description

If a player dismisses the demo selection panel via an ad-hoc close button without emitting `SKIP_TRIAL_DATA`, `GameLogic` assumes the selection modal is still blocking input.

---

## 2. Prevention

Always bind the close/skip button in the trial modal to `onSkipPressed()`.
