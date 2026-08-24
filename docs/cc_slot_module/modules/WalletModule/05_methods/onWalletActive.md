---
id: "cc_slot_module:WalletModule:methods:onWalletActive"
title: "WalletModule.onWalletActive Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "onWalletActive"]
---

# 📖 `WalletModule.onWalletActive()`

---

## 1. Method Overview & Signature

Synchronizes `realWallet.active` with `uiManagerData.isWalletActive`.

```typescript
public onWalletActive(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onWalletActive(isActive): void {
    this.realWallet.active = isActive;
}
```
