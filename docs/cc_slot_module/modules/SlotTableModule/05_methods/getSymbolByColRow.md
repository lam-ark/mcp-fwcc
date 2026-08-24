---
id: "cc_slot_module:SlotTableModule:method:getSymbolByColRow"
title: "SlotTableModule.getSymbolByColRow() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "getSymbolByColRow"]
---

# `SlotTableModule.getSymbolByColRow(col: number, row: number): cc.Node`

---

## 1. Method Signature
```typescript
getSymbolByColRow(col: number, row: number): cc.Node
```

---

## 2. Detailed Algorithmic Execution Logic
Validates column index `this.reels[col]`; returns `this.reels[col].getSymbolByRow(row)` or `null`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getSymbolByColRow(col: number, row: number): cc.Node {
    if (!this.reels[col]) {
        return null;
    }
    return this.reels[col].getSymbolByRow(row);
}
```
