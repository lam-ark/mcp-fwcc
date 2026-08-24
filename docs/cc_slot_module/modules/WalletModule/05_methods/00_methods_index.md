---
id: "cc_slot_module:WalletModule:methods:index"
title: "WalletModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "index"]
---

# 📚 WalletModule Methods Catalog Index

---

## 1. Declared Methods Index (All 12 Methods)

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Binds `PAUSE_WALLET`, `RESUME_WALLET`, and `SYNC_WALLET` event listeners. |
| **[`start`](./start.md)** | `public` | `void` | Acquires data models and initializes observers. |
| **[`setupObserver`](./setupObserver.md)** | `public` | `void` | Observes wallet active flags and balance values (`wallets.NORMAL`, `wallets.TRIAL`). |
| **[`onSwitchMode`](./onSwitchMode.md)** | `public` | `void` | Dispatches `RESUME_WALLET` to active wallet node on demo/real mode switch. |
| **[`onWalletActive`](./onWalletActive.md)** | `public` | `void` | Toggles `realWallet.active`. |
| **[`onTrialWalletActive`](./onTrialWalletActive.md)**| `public`| `void`| Toggles `trialWallet.active`. |
| **[`onUpdateWallet`](./onUpdateWallet.md)** | `public` | `void` | Emits `ON_UPDATE_VALUE` to `realWallet`. |
| **[`onUpdateTrialWallet`](./onUpdateTrialWallet.md)**| `public`| `void`| Emits `ON_UPDATE_VALUE` to `trialWallet`. |
| **[`pauseWallet`](./pauseWallet.md)** | `public` | `void` | Emits `PAUSE_WALLET` to active wallet node during win roll-ups. |
| **[`resumeWallet`](./resumeWallet.md)** | `public` | `void` | Emits `RESUME_WALLET` to active wallet node after win roll-up. |
| **[`syncWallet`](./syncWallet.md)** | `public` | `void` | Invokes `resumeWallet()` for hydration. |
| **[`onDestroy`](./onDestroy.md)** | `public` | `void` | Releases reactive observer subscriptions. |
