---
id: "cc_slot_module:WalletModule:game_flow:spin_phase_breakdown"
title: "WalletModule Spin Phase Synchronization"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 WalletModule Spin Phase Synchronization

---

## 1. Lifecycle Phases

| Phase | Wallet State | Trigger |
| :--- | :--- | :--- |
| **Bet Deduct** | Wager subtracted from balance. | Fired upon spin network request. |
| **Spin In-Flight** | Balance remains deducted. | Reels rolling. |
| **Win Presentation** | Pauses rolling balance (`pauseWallet`). | `PAUSE_WALLET` event from Director. |
| **Settle** | Adds total round win to balance (`resumeWallet`). | `RESUME_WALLET` / `SYNC_WALLET` event. |
