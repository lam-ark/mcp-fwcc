---
id: "cc_slot_module:WalletModule:gotchas:index"
title: "WalletModule Gotchas Index"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ WalletModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_unreleased_wallet_observer_leak`](./01_unreleased_wallet_observer_leak.md)** | Observer Memory Leak Across Mode Swaps | HIGH | Failing to release observers in `onDestroy()` leaves lingering balance update callbacks. |
| **[`02_mode_transition_wallet_sync_skip`](./02_mode_transition_wallet_sync_skip.md)** | Skipping Wallet Resume During Free Spins | HIGH | Calling `resumeWallet()` during Free Spins is suppressed by design; developers must wait for `NORMAL_GAME` settle. |
