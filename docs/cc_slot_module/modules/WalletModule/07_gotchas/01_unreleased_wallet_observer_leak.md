---
id: "cc_slot_module:WalletModule:gotchas:unreleased_wallet_observer_leak"
title: "Gotcha: Observer Memory Leak Across Mode Swaps"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "gotchas", "memory_leak"]
---

# ⚠️ Gotcha: Observer Memory Leak Across Mode Swaps

---

## 1. Problem Description

`WalletModule` watches both `WalletData` and `UIManagerData`. If `this.observer.releaseAll()` is not invoked for both models in `onDestroy()`, stale handlers persist and duplicate balance emissions occur on subsequent game reloads.

---

## 2. Prevention

Always release both models:
```typescript
onDestroy(): void {
    this.observer.releaseAll(this.walletModel, this);
    this.observer.releaseAll(this.uiManagerData, this);
}
```
