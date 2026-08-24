---
id: "cc_slot_module:BetModule:methods:index"
title: "BetModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "index"]
---

# 📚 BetModule Methods Catalog Index

---

## 1. Declared Methods Index (All 15 Methods)

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`start`](./start.md)** | `public` | `void` | Disables buttons initially, locates `BetData`, and initializes observers. |
| **[`setupObserver`](./setupObserver.md)** | `public` | `void` | Subscribes to `betDenom`, `totalBet`, `betLineNumber`, `min/maxBetEnable`. |
| **[`onUpdateBetDenom`](./onUpdateBetDenom.md)** | `public` | `void` | Emits `ON_UPDATE_VALUE` with new coin denomination. |
| **[`onUpdateTotalBet`](./onUpdateTotalBet.md)** | `public` | `void` | Emits `ON_UPDATE_VALUE` with new total wager amount. |
| **[`onUpdateBetLineNumber`](./onUpdateBetLineNumber.md)**| `public`| `void` | Updates active payline count string. |
| **[`onUpdateTotalCredit`](./onUpdateTotalCredit.md)**| `public` | `void` | Updates player credit balance string. |
| **[`getCreditText`](./getCreditText.md)** | `public` | `string` | Retrieves localized "CREDITS" text string. |
| **[`disableBet`](./disableBet.md)** | `public` | `void` | Disables both increment and decrement buttons. |
| **[`onMinBetEnable`](./onMinBetEnable.md)** | `public` | `void` | Sets `decreaseBet.interactable` based on min-bet status. |
| **[`onMaxBetEnable`](./onMaxBetEnable.md)** | `public` | `void` | Sets `increaseBet.interactable` based on max-bet status. |
| **[`onIncreaseBet`](./onIncreaseBet.md)** | `public` | `void` | Plays sound and dispatches `INCREASE_BET`. |
| **[`onDecreaseBet`](./onDecreaseBet.md)** | `public` | `void` | Plays sound and dispatches `DECREASE_BET`. |
| **[`playSfxIncreaseBet`](./playSfxIncreaseBet.md)**| `public` | `void` | Plays wager increment sound effect. |
| **[`playSfxDecreaseBet`](./playSfxDecreaseBet.md)**| `public` | `void` | Plays wager decrement sound effect. |
| **[`onDestroy`](./onDestroy.md)** | `public` | `void` | Releases reactive observer subscriptions. |
