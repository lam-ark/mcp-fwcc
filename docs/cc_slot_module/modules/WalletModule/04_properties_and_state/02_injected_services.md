---
id: "cc_slot_module:WalletModule:properties_and_state:injected_services"
title: "WalletModule Injected Services"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 WalletModule Injected Services

---

## 1. Injected Dependencies

| Service | Type | Scope | Purpose |
| :--- | :--- | :--- | :--- |
| `dataStore` | `GameDataStore` | `@inject` | Checks `currentGameMode` to restrict balance updates during Free Spins. |
| `gameSettings` | `SlotGameSettings`| `@inject` | Checks `isTrialMode` to route events to `trialWallet` vs `realWallet`. |
