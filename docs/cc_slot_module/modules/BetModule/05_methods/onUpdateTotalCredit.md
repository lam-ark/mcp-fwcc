---
id: "cc_slot_module:BetModule:methods:onUpdateTotalCredit"
title: "BetModule.onUpdateTotalCredit Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onUpdateTotalCredit"]
---

# 📖 `BetModule.onUpdateTotalCredit()`

---

## 1. Method Overview & Signature

Appends localized credit text suffix to the total credit balance and updates `totalCreditLabel`.

```typescript
public onUpdateTotalCredit(totalCredit: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdateTotalCredit(totalCredit: number): void {
    if (this.totalCreditLabel && totalCredit) {
        this.totalCreditLabel.string = `${totalCredit}` + this.getCreditText();
    }
}
```
