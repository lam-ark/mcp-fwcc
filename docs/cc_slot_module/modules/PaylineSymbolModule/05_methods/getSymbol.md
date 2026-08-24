---
id: "cc_slot_module:PaylineSymbolModule:method:getSymbol"
title: "PaylineSymbolModule.getSymbol Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "getSymbol"]
---

# 🚀 `PaylineSymbolModule.getSymbol(reel, row): cc.Node`

---

## 1. Method Signature

```typescript
protected getSymbol(reel: number, row: number): cc.Node
```

---

## 2. Full Source Code

```typescript
protected getSymbol(reel: number, row: number): cc.Node {
    if (!this.matrix || !this.matrix[reel] || !this.matrix[reel][row]) {
        return null;
    }

    let symbol = this.mapTableSymbols[reel] ? this.mapTableSymbols[reel][row] : null;
    if (!symbol) {
        const index = PaylineUtils.convertToIndex(this.matrix, reel, row);
        const symbolCode = this.matrix[reel][row];
        symbol = this.factory.getSymbolByIndex(index, SymbolOwnerType.PAYLINE);
        if (!symbol) {
            if (this.paylineConfig.IS_DEBUG) {
                error(`[PaylineSymbolModule] Symbol not found at reel ${reel}, row ${row}, index ${index}`);
            }
            return null;
        }
        if (symbolCode !== symbol["symbolName"]) {
            if (this.paylineConfig.IS_DEBUG) {
                warn(`[PaylineSymbolModule] Need to reinit symbol at reel ${reel}, row ${row}, index ${index}, current code is ${symbol["symbolName"]} and new code is ${symbolCode}`);
            }
        }
        symbol["reel"] = reel;
        symbol["row"] = row;
    }

    return symbol;
}
```
