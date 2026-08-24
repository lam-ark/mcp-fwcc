---
id: "cc_slot_module:UIManagerModule:methods:index"
title: "UIManagerModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "index"]
---

# 📚 UIManagerModule Methods Catalog Index

---

## 1. Declared Methods Index (All 26 Methods)

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Binds update events and initializes observers. |
| **[`setupObserver`](./setupObserver.md)** | `public` | `void` | Observes `isTrialModeActive` on `UIManagerData`. |
| **[`updateGameModeUI`](./updateGameModeUI.md)** | `public` | `void` | Hides all UI and routes to the active mode layout. |
| **[`showUIForGameMode`](./showUIForGameMode.md)** | `public` | `void` | Mode-branching router for Normal, Free, and Bonus modes. |
| **[`setNodeActive`](./setNodeActive.md)** | `public` | `void` | Null-safe helper to set node active state. |
| **[`setNodeOpacity`](./setNodeOpacity.md)** | `public` | `void` | Null-safe helper to set node opacity via `eno.setOpacity`. |
| **[`hideAllUI`](./hideAllUI.md)** | `public` | `void` | Deactivates all HUD elements, promotions, and payline info. |
| **[`hideUIElements`](./hideUIElements.md)** | `public` | `void` | Deactivates betting, wallet, jackpot, turbo, and buy feature nodes. |
| **[`hidePromotionUI`](./hidePromotionUI.md)** | `public` | `void` | Deactivates all promotional overlay nodes. |
| **[`hideSpinControls`](./hideSpinControls.md)** | `public` | `void` | Deactivates spin buttons and spin times badges. |
| **[`hidePaylineInfo`](./hidePaylineInfo.md)** | `public` | `void` | Fades opacity to 0 on all payline info banners. |
| **[`showNormalGameUI`](./showNormalGameUI.md)** | `public` | `void` | Activates normal game buttons, bet steppers, and promotions. |
| **[`showPromotionUI`](./showPromotionUI.md)** | `public` | `void` | Sets promotional nodes active if promotion is active. |
| **[`showNormalUIElements`](./showNormalUIElements.md)**| `public` | `void` | Activates normal bet, wallet, win amount, and turbo buttons. |
| **[`showNormalSpinControls`](./showNormalSpinControls.md)**| `public`| `void`| Activates normal spin button and normal spin times badge. |
| **[`showNormalPaylineInfo`](./showNormalPaylineInfo.md)**| `public`| `void`| Sets normal payline info opacity to 255. |
| **[`showFreeGameUI`](./showFreeGameUI.md)** | `public` | `void` | Activates free spin button and remaining spin badges. |
| **[`showFreeUIElements`](./showFreeUIElements.md)** | `public` | `void` | Activates free game bet, wallet, win amount, and turbo. |
| **[`showFreeSpinControls`](./showFreeSpinControls.md)**| `public`| `void`| Activates free spin button and free spin times badge. |
| **[`showPaylineInfoFree`](./showPaylineInfoFree.md)** | `public` | `void` | Sets free game payline info opacity to 255. |
| **[`showBonusGameUI`](./showBonusGameUI.md)** | `public` | `void` | Virtual hook for custom bonus game HUD layouts. |
| **[`showJackpotUI`](./showJackpotUI.md)** | `public` | `void` | Swaps between real and trial jackpot banners. |
| **[`onSwitchMode`](./onSwitchMode.md)** | `public` | `void` | Synchronizes trial mode flag into DataStore and GameSettings. |
| **[`checkDisplayPopup`](./checkDisplayPopup.md)**| `public` | `boolean` | Verifies whether popups or cutscenes are blocking input. |
| **[`isSpinVisible`](./isSpinVisible.md)** | `public` | `boolean` | Checks whether spin buttons are eligible for interaction. |
| **[`onDestroy`](./onDestroy.md)** | `public` | `void` | Releases reactive observer subscriptions. |
