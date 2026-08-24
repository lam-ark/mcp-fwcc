---
id: "cc_slot_module:BetModule:methods:onUpdateTotalBet"
title: "BetModule.onUpdateTotalBet Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onUpdateTotalBet"]
---

# 📖 `BetModule.onUpdateTotalBet()`

---

## 1. Method Overview & Signature

Dispatches `ON_UPDATE_VALUE` with new total wager amount to `totalBetLabel`.

```typescript
public onUpdateTotalBet(totalBet: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdateTotalBet(totalBet: number): void {
    this.totalBetLabel.node.emit("ON_UPDATE_VALUE", totalBet);
}
```
