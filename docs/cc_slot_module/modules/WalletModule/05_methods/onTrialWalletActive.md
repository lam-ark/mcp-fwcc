---
id: "cc_slot_module:WalletModule:methods:onTrialWalletActive"
title: "WalletModule.onTrialWalletActive Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "onTrialWalletActive"]
---

# 📖 `WalletModule.onTrialWalletActive()`

---

## 1. Method Overview & Signature

Synchronizes `trialWallet.active` with `uiManagerData.isWalletTrialActive`.

```typescript
public onTrialWalletActive(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onTrialWalletActive(isActive): void {
    this.trialWallet.active = isActive;
}
```
