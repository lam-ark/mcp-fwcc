---
id: "cc_slot_module:WalletModule:gotchas:mode_transition_wallet_sync_skip"
title: "Gotcha: Skipping Wallet Resume During Free Spins"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "gotchas", "free_spins"]
---

# ⚠️ Gotcha: Skipping Wallet Resume During Free Spins

---

## 1. Problem Description

`resumeWallet()` explicitly gates execution with `this.dataStore.currentGameMode !== GAME_MODE_ENUM.NORMAL_GAME`. Calling `resumeWallet()` in Free Game scripts will deliberately do nothing, as free spin wins are accumulated in `TotalWinModule` and credited to the main wallet balance only upon returning to `NORMAL_GAME`.

---

## 2. Prevention

Rely on `TotalWinModule` to present free spin wins during free game cycles; do not force wallet count-ups per individual free spin.
