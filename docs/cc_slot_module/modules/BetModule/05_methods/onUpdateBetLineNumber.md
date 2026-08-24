---
id: "cc_slot_module:BetModule:methods:onUpdateBetLineNumber"
title: "BetModule.onUpdateBetLineNumber Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onUpdateBetLineNumber"]
---

# 📖 `BetModule.onUpdateBetLineNumber()`

---

## 1. Method Overview & Signature

Updates the string displayed on `totalLineLabel`.

```typescript
public onUpdateBetLineNumber(betLineNumber: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdateBetLineNumber(betLineNumber: number): void {
    if (this.totalLineLabel && betLineNumber) {
        this.totalLineLabel.string = `${betLineNumber}`;
    }
}
```
