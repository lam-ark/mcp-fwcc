---
id: "cc_slot_module:TotalWinModule:gotchas:fallback_winamountps_mismatch"
title: "Gotcha: Fallback winAmountPS Mismatch"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "gotchas", "data_mismatch"]
---

# ⚠️ Gotcha: Fallback `winAmountPS` Mismatch

---

## 1. Problem Description

In `TotalWinModule.getTotalWinAmount()`:
```typescript
getTotalWinAmount(): number {
    const { winAmount } = this.content;
    const winAmountPS = this.dataStore.getWinAmountPS();
    return Number(winAmount || winAmountPS || 0);
}
```
If a writer passes an empty payload `{}` during test preview, `dataStore.getWinAmountPS()` might return leftover cached values from a previous spin, causing false win totals.

---

## 2. Solution

Always explicitly pass `{ winAmount: freeSpinTotalAccumulator }` in writer commands.
