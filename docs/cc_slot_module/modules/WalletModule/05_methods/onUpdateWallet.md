---
id: "cc_slot_module:WalletModule:methods:onUpdateWallet"
title: "WalletModule.onUpdateWallet Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "onUpdateWallet"]
---

# 📖 `WalletModule.onUpdateWallet()`

---

## 1. Method Overview & Signature

Dispatches `ON_UPDATE_VALUE` to the `realWallet` display node with the latest balance.

```typescript
public onUpdateWallet(value: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdateWallet(value): void {
    this.realWallet.emit('ON_UPDATE_VALUE', value);
}
```
