---
id: "cc_slot_module:WinAmountModule:methods:clearWinAmount"
title: "WinAmountModule.clearWinAmount Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "clearWinAmount"]
---

# 📖 `WinAmountModule.clearWinAmount()`

---

## 1. Method Overview & Signature

Resets label text, zeroes cached values, and stops active win frame animations.

```typescript
public clearWinAmount(): void
```

---

## 2. Complete Source Code Implementation

```typescript
clearWinAmount(): void {
    this._resetLabel();
    this.currentValue = 0;
    this._winValue = 0;
    this.stopWinEffect();
}
```
