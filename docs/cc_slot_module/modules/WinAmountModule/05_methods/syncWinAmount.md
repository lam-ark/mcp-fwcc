---
id: "cc_slot_module:WinAmountModule:methods:syncWinAmount"
title: "WinAmountModule.syncWinAmount Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "syncWinAmount", "hydration"]
---

# 📖 `WinAmountModule.syncWinAmount()`

---

## 1. Method Overview & Signature

Instantly recovers and displays last round win value during session reconnection.

```typescript
public syncWinAmount(value?: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
syncWinAmount(value): void {
    this._tweenValue && this._tweenValue.stop();
    this._tweenValue = null;
    this._winValue = value || this.dataStore.getWinAmountPS();
    this.currentValue = this._winValue;
    this._callBackOnComplete = null;
    this.stopWinEffect();
    log("sync last win amount");
}
```
