---
id: "cc_slot_module:PaylineInfoModule:methods:convertPayLineInfoScatterPay"
title: "PaylineInfoModule.convertPayLineInfoScatterPay Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "convertPayLineInfoScatterPay"]
---

# 📖 `PaylineInfoModule.convertPayLineInfoScatterPay()`

---

## 1. Method Overview & Signature

Formats payline toast strings for Scatter-pay (Pay Anywhere) slot mechanics.

```typescript
protected convertPayLineInfoScatterPay({ symbolId, payLineWinAmount, payLineWinNumbers }: any): any
```

---

## 2. Complete Source Code Implementation

```typescript
protected convertPayLineInfoScatterPay({ symbolId, payLineWinAmount, payLineWinNumbers }: any): any {
    const leftString = `${this.winText} ` + payLineWinNumbers;
    const rightString = "= " + this.moneyFormatter.formatMoney(payLineWinAmount) + "";

    return { leftString, rightString, symbolId };
}
```
