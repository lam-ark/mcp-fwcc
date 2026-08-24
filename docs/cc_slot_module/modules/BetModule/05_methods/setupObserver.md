---
id: "cc_slot_module:BetModule:methods:setupObserver"
title: "BetModule.setupObserver Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `BetModule.setupObserver()`

---

## 1. Method Overview & Signature

Registers observers on `betDenom`, `totalBet`, `betLineNumber`, `totalCredit`, `minBetEnable`, and `maxBetEnable`.

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
    this.observer.watch(this.betModel, "betDenom", this.onUpdateBetDenom.bind(this), this);
    this.observer.watch(this.betModel, "totalBet", this.onUpdateTotalBet.bind(this), this);
    this.observer.watch(this.betModel, "betLineNumber", this.onUpdateBetLineNumber.bind(this), this);
    this.observer.watch(this.betModel, "totalCredit", this.onUpdateTotalCredit.bind(this), this);
    this.observer.watch(this.betModel, "minBetEnable", this.onMinBetEnable.bind(this), this, { canTriggerSameValue: true });
    this.observer.watch(this.betModel, "maxBetEnable", this.onMaxBetEnable.bind(this), this, { canTriggerSameValue: true });
}
```
