---
id: "cc_slot_module:BetModule:methods:onMaxBetEnable"
title: "BetModule.onMaxBetEnable Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onMaxBetEnable"]
---

# 📖 `BetModule.onMaxBetEnable()`

---

## 1. Method Overview & Signature

Synchronizes `increaseBet.interactable` with `maxBetEnable`.

```typescript
public onMaxBetEnable(maxBetEnable: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onMaxBetEnable(maxBetEnable: boolean): void {
    this.increaseBet.interactable = maxBetEnable;
}
```
