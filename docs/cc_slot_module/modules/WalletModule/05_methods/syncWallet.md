---
id: "cc_slot_module:WalletModule:methods:syncWallet"
title: "WalletModule.syncWallet Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "syncWallet"]
---

# 📖 `WalletModule.syncWallet()`

---

## 1. Method Overview & Signature

Synchronizes wallet balance by invoking `resumeWallet()`.

```typescript
public syncWallet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
syncWallet(): void {
    this.resumeWallet();
}
```
