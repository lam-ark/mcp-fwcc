---
id: "cc_slot_module:TrialModeManager:gotchas:unconfigured_currency_trial_data_error"
title: "Gotcha: Missing Currency Configuration in Trial Data"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "gotchas", "currency"]
---

# ⚠️ Gotcha: Missing Currency Configuration in Trial Data

---

## 1. Problem Description

If a player logs in with a currency (e.g. `VND`, `IDR`, `USD`) not present in `trialModeData`, `safeCheckTrialMode()` logs a red console error:
`[TrialModeManager] No data for currency: VND, please check the TrialModeData`.

---

## 2. Prevention

Always configure default trial bet arrays for all supported game currencies in `trialModeData`.
