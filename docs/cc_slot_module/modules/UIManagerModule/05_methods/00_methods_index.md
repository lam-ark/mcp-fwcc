---
id: "cc_slot_module:UIManagerModule:methods:index"
title: "UIManagerModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "index"]
---

# 📚 UIManagerModule Methods Catalog Index

---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Binds update events and initializes observers. |
| **[`setupObserver`](./setupObserver.md)** | `public` | `void` | Observes `isTrialModeActive` on `UIManagerData`. |
| **[`updateGameModeUI`](./updateGameModeUI.md)** | `public` | `void` | Hides all UI and routes to the active mode layout. |
| **[`showUIForGameMode`](./showUIForGameMode.md)** | `public` | `void` | Mode-branching router for Normal, Free, and Bonus modes. |
| **[`hideAllUI`](./hideAllUI.md)** | `public` | `void` | Deactivates all HUD elements, promotions, and payline info. |
| **[`showNormalGameUI`](./showNormalGameUI.md)** | `public` | `void` | Activates normal game buttons, bet steppers, and promotions. |
| **[`showFreeGameUI`](./showFreeGameUI.md)** | `public` | `void` | Activates free spin buttons and remaining spin badges. |
| **[`showBonusGameUI`](./showBonusGameUI.md)** | `public` | `void` | Virtual hook for custom bonus game HUD layouts. |
| **[`showJackpotUI`](./showJackpotUI.md)** | `public` | `void` | Swaps between real and trial jackpot banners. |
| **[`onSwitchMode`](./onSwitchMode.md)** | `public` | `void` | Synchronizes trial mode flag into DataStore and GameSettings. |
| **[`checkDisplayPopup`](./checkDisplayPopup.md)**| `public` | `boolean` | Verifies whether popups or cutscenes are blocking input. |
| **[`isSpinVisible`](./isSpinVisible.md)** | `public` | `boolean` | Checks whether spin buttons are eligible for interaction. |
| **[`onDestroy`](./onDestroy.md)** | `public` | `void` | Releases reactive observer subscriptions. |
