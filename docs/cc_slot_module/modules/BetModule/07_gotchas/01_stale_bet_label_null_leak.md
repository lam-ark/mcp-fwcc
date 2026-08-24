---
id: "cc_slot_module:BetModule:gotchas:stale_bet_label_null_leak"
title: "Gotcha: Null Pointer Crash on Unassigned Labels"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "gotchas", "null_pointer"]
---

# ⚠️ Gotcha: Null Pointer Crash on Unassigned Labels

---

## 1. Problem Description

In `onUpdateBetDenom()` and `onUpdateTotalBet()`, `this.betDenomLabel.node.emit("ON_UPDATE_VALUE", ...)` accesses `.node` directly. If the label property is not linked in Cocos Inspector, a fatal crash occurs during startup.

---

## 2. Prevention

Always assign the label reference or guard with optional chaining:
```typescript
if (this.betDenomLabel && this.betDenomLabel.node) {
    this.betDenomLabel.node.emit("ON_UPDATE_VALUE", betDenom);
}
```
