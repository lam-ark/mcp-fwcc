---
id: "cc_slot_module:SlotTablePaylineData:method:getWinSymbols"
title: "SlotTablePaylineData.getWinSymbols Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "methods", "getWinSymbols"]
---

# 🚀 `SlotTablePaylineData.getWinSymbols(): { reel, row, index }[]`

---

## 1. Method Signature

```typescript
public getWinSymbols(): { reel: number, row: number, index: number }[]
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `SlotTablePaylineModule.onSetupPaylines()`.

---

## 3. Algorithmic Steps

1. Fetches current matrix via `this.getMatrix()`.
2. Fetches converted paylines via `this.getPayLines()`.
3. Calls `PaylineUtils.getAllWinSymbols(matrix, payLines)`.

---

## 4. Full Source Code

```typescript
getWinSymbols(): { reel: number, row: number, index: number }[] {
    const matrix = this.getMatrix();
    const payLines = this.getPayLines();
    const symbols = PaylineUtils.getAllWinSymbols(matrix, payLines);
    return symbols;
}
```
