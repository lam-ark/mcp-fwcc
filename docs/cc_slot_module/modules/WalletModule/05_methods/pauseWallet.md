---
id: "cc_slot_module:WalletModule:methods:pauseWallet"
title: "WalletModule.pauseWallet Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "pauseWallet"]
---

# 📖 `WalletModule.pauseWallet()`

---

## 1. Method Overview & Signature

Dispatches `PAUSE_WALLET` to the active wallet node (`trialWallet` or `realWallet`) to hold balance counting during celebratory cutscenes.

```typescript
public pauseWallet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
pauseWallet(): void {
    if (this.gameSettings.isTrialMode) {
        this.trialWallet.emit("PAUSE_WALLET");
    } else {
        this.realWallet.emit("PAUSE_WALLET");
    }
}
```
