---
id: "cc_slot_module:PaylineInfoModule:methods:convertPayLineInfoAllWays"
title: "PaylineInfoModule.convertPayLineInfoAllWays Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "convertPayLineInfoAllWays"]
---

# 📖 `PaylineInfoModule.convertPayLineInfoAllWays()`

---

## 1. Method Overview & Signature

Formats payline toast strings for 243 / 1024 Ways to Win mechanics.

```typescript
protected convertPayLineInfoAllWays({ symbolId, payLineWinAmount, reelCount, combination }: any): any
```

---

## 2. Complete Source Code Implementation

```typescript
protected convertPayLineInfoAllWays({ symbolId, payLineWinAmount, reelCount, combination }: any): any {
    const winCombination = eno.FloatUtils.div(payLineWinAmount, combination);
    const symbolPayTableString = `${this.winText} ` + this.moneyFormatter.formatMoney(winCombination);
    const combinationString = combination > 1 ? ' x' + combination + ' = ' : '';
    const winAmount = combination > 1 ? this.moneyFormatter.formatMoney(payLineWinAmount) : '';
    const leftString = `${reelCount}`;
    const rightString = symbolPayTableString + combinationString + winAmount;

    return { leftString, rightString, symbolId };
}
```
