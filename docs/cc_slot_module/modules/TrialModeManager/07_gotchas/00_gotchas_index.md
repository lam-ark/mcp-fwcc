---
id: "cc_slot_module:TrialModeManager:gotchas:index"
title: "TrialModeManager Gotchas Index"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ TrialModeManager Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_unconfigured_currency_trial_data_error`](./01_unconfigured_currency_trial_data_error.md)** | Missing Currency Configuration in Trial Data | HIGH | Missing bet steps for active player currency causes demo bets to misalign with real paytables. |
| **[`02_trial_panel_selection_lockout`](./02_trial_panel_selection_lockout.md)** | Panel Lockout on Skipped Scenarios | MEDIUM | Forgetting to emit `SKIP_TRIAL_DATA` leaves the game director waiting for scenario selection. |
