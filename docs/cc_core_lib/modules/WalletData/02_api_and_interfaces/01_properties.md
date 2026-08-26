---
id: "cc_core_lib:WalletData:api:properties"
title: "WalletData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["WalletData", "wallet_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `WalletData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`floatUtils`** | `any` | Collection of elements managed by `WalletData`. |
| **`wallets`** | `number[]` | Collection of elements managed by `WalletData`. |
| **`NORMAL`** | `number` | Numeric counter or index value in `WalletData`. |
| **`TRIAL`** | `number` | Numeric counter or index value in `WalletData`. |
| **`PROMOTE`** | `number` | Numeric counter or index value in `WalletData`. |

---

## 2. State Mutation Lifecycle

All state fields in `WalletData` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
