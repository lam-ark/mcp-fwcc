---
id: "cc_slot_module:PaylineInfoModule:methods:convertPayLineInfoLine"
title: "PaylineInfoModule.convertPayLineInfoLine Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "convertPayLineInfoLine"]
---

# 📖 `PaylineInfoModule.convertPayLineInfoLine()`

---

## 1. Method Overview & Signature

Formats payline toast strings for Line-based slot mechanics.

```typescript
protected convertPayLineInfoLine({ payLineID, payLineWinNumbers, payLineWinAmount, symbolId }: any): any
```

---

## 2. Complete Source Code Implementation

```typescript
protected convertPayLineInfoLine({ payLineID, payLineWinNumbers, payLineWinAmount, symbolId }: any): any {
    const leftString = `${this.lineText} ${payLineID} ${this.winText} ` + payLineWinNumbers + " x";
    const rightString = "= " + this.moneyFormatter.formatMoney(payLineWinAmount) + "";
    return { leftString, rightString, symbolId };
}
```
