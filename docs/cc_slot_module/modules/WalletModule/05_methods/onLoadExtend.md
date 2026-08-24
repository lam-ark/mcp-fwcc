---
id: "cc_slot_module:WalletModule:methods:onLoadExtend"
title: "WalletModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `WalletModule.onLoadExtend()`

---

## 1. Method Overview & Signature

Registers listeners for global wallet lifecycle events on `eventManager`.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.on(GameUIEvents.WALLET.PAUSE_WALLET, this.pauseWallet, this);
    this.eventManager.on(GameUIEvents.WALLET.RESUME_WALLET, this.resumeWallet, this);
    this.eventManager.on(GameUIEvents.WALLET.SYNC_WALLET, this.syncWallet, this);
}
```
