---
id: "cc_slot_module:WalletModule:methods:start"
title: "WalletModule.start Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "start"]
---

# 📖 `WalletModule.start()`

---

## 1. Method Overview & Signature

Retrieves `WalletData` and `UIManagerData` models from `GameLogic` and configures observers.

```typescript
public start(): void
```

---

## 2. Complete Source Code Implementation

```typescript
start(): void {
    this.walletModel = this.gameLogic.getDataModel().WalletData;
    this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
    this.setupObserver();
}
```
