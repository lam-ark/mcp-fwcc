---
id: "cc_slot_module:BetModule:methods:onUpdateBetDenom"
title: "BetModule.onUpdateBetDenom Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onUpdateBetDenom"]
---

# 📖 `BetModule.onUpdateBetDenom()`

---

## 1. Method Overview & Signature

Dispatches `ON_UPDATE_VALUE` with new coin denomination to `betDenomLabel`.

```typescript
public onUpdateBetDenom(betDenom: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdateBetDenom(betDenom: number): void {
    this.betDenomLabel.node.emit("ON_UPDATE_VALUE", betDenom);
}
```
