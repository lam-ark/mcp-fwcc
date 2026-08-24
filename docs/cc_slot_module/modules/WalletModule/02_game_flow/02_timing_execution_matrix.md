---
id: "cc_slot_module:WalletModule:game_flow:timing_execution_matrix"
title: "WalletModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ WalletModule Timing Execution Matrix

---

## 1. Timing Configuration

| Action | Duration | Description |
| :--- | :--- | :--- |
| `pauseWallet` | Instant | Suppresses interim count-ups immediately. |
| `resumeWallet` | $0.5\text{s} - 1.0\text{s}$ | Smooth money tween to final settled balance. |
| `syncWallet` | Immediate | Immediate sync with `dataStore.playSession`. |
