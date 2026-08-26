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

## 2. State Mutation Lifecycle

All state fields in `WalletManager` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
