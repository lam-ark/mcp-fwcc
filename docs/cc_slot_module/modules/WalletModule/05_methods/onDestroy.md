---
id: "cc_slot_module:WalletModule:methods:onDestroy"
title: "WalletModule.onDestroy Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `WalletModule.onDestroy()`

---

## 1. Method Overview & Signature

Releases reactive observers registered against `walletModel` and `uiManagerData`.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.walletModel, this);
    this.observer.releaseAll(this.uiManagerData, this);
}
```
