---
id: "cc_slot_module:WalletModule:methods:resumeWallet"
title: "WalletModule.resumeWallet Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "resumeWallet"]
---

# 📖 `WalletModule.resumeWallet()`

---

## 1. Method Overview & Signature

Dispatches `RESUME_WALLET` to the active wallet node to conclude money count-up, restricted to `NORMAL_GAME`.

```typescript
public resumeWallet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
resumeWallet(): void {
    if (this.dataStore.currentGameMode !== GAME_MODE_ENUM.NORMAL_GAME) {
        return;
    }
    if (this.gameSettings.isTrialMode) {
        this.trialWallet.emit("RESUME_WALLET");
    } else {
        this.realWallet.emit("RESUME_WALLET");
    }
}
```
