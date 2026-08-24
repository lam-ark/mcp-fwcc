---
id: "cc_slot_module:TotalWinModule:methods:getTotalWinAmount"
title: "TotalWinModule.getTotalWinAmount Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "getTotalWinAmount"]
---

# 📖 `TotalWinModule.getTotalWinAmount()`

---

## 1. Method Overview & Signature

Extracts aggregate win value from `this.content.winAmount` with fallback to `dataStore.getWinAmountPS()`.

```typescript
public getTotalWinAmount(): number
```

---

## 2. Complete Source Code Implementation

```typescript
getTotalWinAmount(): number {
    const { winAmount } = this.content;
    const winAmountPS = this.dataStore.getWinAmountPS();
    return Number(winAmount || winAmountPS || 0);
}
```
