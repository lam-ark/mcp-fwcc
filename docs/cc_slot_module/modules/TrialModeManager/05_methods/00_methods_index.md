---
id: "cc_slot_module:TrialModeManager:methods:index"
title: "TrialModeManager Methods Catalog Index"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "index"]
---

# 📚 TrialModeManager Methods Catalog Index

---

## 1. Declared Methods Index (All 9 Methods)

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Emits `INIT_TRIAL_MODE` and sets up observers. |
| **[`setupObserver`](./setupObserver.md)** | `public` | `void` | Observes `isPopupDisplay`, `tutorialOptions`, and `isTrialModeActive`. |
| **[`updateTrialModePanel`](./updateTrialModePanel.md)**| `public` | `void` | Toggles modal visibility and opacity. |
| **[`hideTrialModePanel`](./hideTrialModePanel.md)** | `public` | `void` | Hides modal panel immediately. |
| **[`updateOptions`](./updateOptions.md)** | `public` | `void` | Emits `SET_INTERACTABLE` to scenario buttons. |
| **[`playOption`](./playOption.md)** | `public` | `void` | Dispatches selected demo scenario to `GameLogic`. |
| **[`onSkipPressed`](./onSkipPressed.md)** | `public` | `void` | Skips demo scenario modal. |
| **[`safeCheckTrialMode`](./safeCheckTrialMode.md)** | `public` | `void` | Validates currency setup in `trialModeData`. |
| **[`onDestroy`](./onDestroy.md)** | `protected` | `void` | Releases reactive observer subscriptions. |
