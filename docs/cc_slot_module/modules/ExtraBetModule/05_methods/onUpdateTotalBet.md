---
id: "cc_slot_module:ExtraBetModule:methods:onUpdateTotalBet"
title: "ExtraBetModule.onUpdateTotalBet Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "onUpdateTotalBet"]
---

# 📖 `ExtraBetModule.onUpdateTotalBet()`

---

## 1. Method Overview & Signature

Updates `extraBetLabel.string` with the current `extraBetValue` from the data model.

```typescript
public onUpdateTotalBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdateTotalBet(): void {
    this.extraBetLabel.string = this.betModel.extraBetValue.toString();
}
```
