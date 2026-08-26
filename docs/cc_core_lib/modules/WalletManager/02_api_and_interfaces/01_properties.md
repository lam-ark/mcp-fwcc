---
id: "cc_core_lib:WalletManager:api:properties"
title: "WalletManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["WalletManager", "wallet_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `WalletManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`currentWallet`** | `number` | Numeric counter or index value in `WalletManager`. |
| **`walletData`** | `WalletData` | Operational field tracking state in `WalletManager`. |
| **`wallets`** | `{ [key: number]: number` | Collection of elements managed by `WalletManager`. |

---

## 2. State Mutation Guardrails

All state fields in `WalletManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
