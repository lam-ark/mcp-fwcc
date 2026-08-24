---
id: "cc_slot_module:ExtraBetModule:methods:setupObserver"
title: "ExtraBetModule.setupObserver Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `ExtraBetModule.setupObserver()`

---

## 1. Method Overview & Signature

Registers observers on `minExtraBetEnable`, `maxExtraBetEnable`, and `totalBet`.

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
    this.observer.watch(this.betModel, "minExtraBetEnable", this.onMinExtraBetEnable.bind(this), this);
    this.observer.watch(this.betModel, "maxExtraBetEnable", this.onMaxExtraBetEnable.bind(this), this);
    this.observer.watch(this.betModel, "totalBet", this.onUpdateTotalBet.bind(this), this);
}
```
