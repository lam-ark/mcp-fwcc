---
id: "cc_slot_module:BetModule:methods:onMinBetEnable"
title: "BetModule.onMinBetEnable Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onMinBetEnable"]
---

# 📖 `BetModule.onMinBetEnable()`

---

## 1. Method Overview & Signature

Synchronizes `decreaseBet.interactable` with `minBetEnable`.

```typescript
public onMinBetEnable(minBetEnable: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onMinBetEnable(minBetEnable: boolean): void {
    this.decreaseBet.interactable = minBetEnable;
}
```
