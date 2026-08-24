---
id: "cc_slot_module:WalletModule:methods:onSwitchMode"
title: "WalletModule.onSwitchMode Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "onSwitchMode"]
---

# 📖 `WalletModule.onSwitchMode()`

---

## 1. Method Overview & Signature

Dispatches `RESUME_WALLET` to the appropriate wallet node on demo/real mode switch.

```typescript
public onSwitchMode(isTrialModeActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSwitchMode(isTrialModeActive: boolean): void {
    if (isTrialModeActive) {
        this.trialWallet.emit("RESUME_WALLET");
    } else {
        this.realWallet.emit("RESUME_WALLET");
    }
}
```
