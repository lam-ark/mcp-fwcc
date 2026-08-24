---
id: "cc_slot_module:PaylineInfoModule:methods:convertPayLineInfoCluster"
title: "PaylineInfoModule.convertPayLineInfoCluster Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "convertPayLineInfoCluster"]
---

# 📖 `PaylineInfoModule.convertPayLineInfoCluster()`

---

## 1. Method Overview & Signature

Formats payline toast strings for Cluster-pay grid mechanics.

```typescript
protected convertPayLineInfoCluster({ symbolId, payLineWinAmount, payLineWinNumbers }: any): any
```

---

## 2. Complete Source Code Implementation

```typescript
protected convertPayLineInfoCluster({ symbolId, payLineWinAmount, payLineWinNumbers }: any): any {
    const leftString = `${this.winText} ` + payLineWinNumbers;
    const rightString = "= " + this.moneyFormatter.formatMoney(payLineWinAmount) + "";

    return { leftString, rightString, symbolId };
}
```
