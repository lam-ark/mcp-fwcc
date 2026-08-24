---
id: "cc_slot_module:BetModule:methods:start"
title: "BetModule.start Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "start"]
---

# 📖 `BetModule.start()`

---

## 1. Method Overview & Signature

Disables steppers initially, acquires `eno.BetData` from `GameLogic`, and initializes reactive observers.

```typescript
public start(): void
```

---

## 2. Complete Source Code Implementation

```typescript
start(): void {
    this.disableBet();
    this.betModel = this.gameLogic.getDataModel().BetData;
    this.setupObserver();
}
```
