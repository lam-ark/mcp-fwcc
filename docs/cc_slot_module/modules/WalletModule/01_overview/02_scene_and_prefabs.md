---
id: "cc_slot_module:WalletModule:overview:scene_and_prefabs"
title: "WalletModule Scene Node Hierarchy"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ WalletModule Scene Node Hierarchy

---

## 1. Canonical Node Structure

Mounted under `Canvas/Director/UIManager/Wallet`:

```text
Canvas/Director/UIManager/Wallet [Component: WalletModule]
├── RealWallet [cc.Node]
│   └── BalanceLabel [cc.Label, Component: Label]
└── TrialWallet [cc.Node]
    ├── DemoWatermark [cc.Sprite]
    └── TrialBalanceLabel [cc.Label, Component: Label]
```
