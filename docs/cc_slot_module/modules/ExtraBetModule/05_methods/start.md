---
id: "cc_slot_module:ExtraBetModule:methods:start"
title: "ExtraBetModule.start Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "start"]
---

# 📖 `ExtraBetModule.start()`

---

## 1. Method Overview & Signature

Disables steppers initially, locates `BetData`, and initializes observers.

```typescript
public start(): void
```

---

## 2. Complete Source Code Implementation

```typescript
start(): void {
    this.disableExtraBet();
    this.betModel = this.gameLogic.getDataModel().BetData;
    this.setupObserver();
}
```
