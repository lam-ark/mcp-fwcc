---
id: "cc_slot_module:WalletModule:director_writer:subsystem_impacts"
title: "WalletModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 WalletModule Cross-Subsystem Impacts

---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`UIManagerModule`** | Controls wallet node visibility (`isWalletActive`, `isWalletTrialActive`). |
| **`GameDataStore`** | Checks `currentGameMode` to restrict premature balance display in Free Spins. |
| **`SlotGameSettings`** | Reads `isTrialMode` to route events to `realWallet` vs `trialWallet`. |
| **`WinEffectModule`** | Triggers `PAUSE_WALLET` and `RESUME_WALLET` around celebration sequences. |
