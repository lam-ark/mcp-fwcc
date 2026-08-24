---
id: "cc_slot_module:SlotTableModule:method:getSymbolByCol"
title: "SlotTableModule.getSymbolByCol() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "getSymbolByCol"]
---

# `SlotTableModule.getSymbolByCol(col: number): cc.Node[]`

---

## 1. Method Signature
```typescript
getSymbolByCol(col: number): cc.Node[]
```

---

## 2. Detailed Algorithmic Execution Logic
Validates column index `this.reels[col]`; returns `this.reels[col].getRealSymbols()` array or `null`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getSymbolByCol(col: number): cc.Node[] {
    if (!this.reels[col]) {
        return null;
    }
    return this.reels[col].getRealSymbols();
}
```
