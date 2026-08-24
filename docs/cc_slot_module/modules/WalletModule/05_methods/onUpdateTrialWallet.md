---
id: "cc_slot_module:WalletModule:methods:onUpdateTrialWallet"
title: "WalletModule.onUpdateTrialWallet Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "onUpdateTrialWallet"]
---

# 📖 `WalletModule.onUpdateTrialWallet()`

---

## 1. Method Overview & Signature

Dispatches `ON_UPDATE_VALUE` to the `trialWallet` display node with the latest demo balance.

```typescript
public onUpdateTrialWallet(value: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdateTrialWallet(value): void {
    this.trialWallet.emit('ON_UPDATE_VALUE', value);
}
```
