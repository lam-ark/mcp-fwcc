---
id: "cc_slot_module:PaylineSymbolModule:method:getWinSymbolsInPayLine"
title: "PaylineSymbolModule.getWinSymbolsInPayLine Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "getWinSymbolsInPayLine"]
---

# 🚀 `PaylineSymbolModule.getWinSymbolsInPayLine(payLine): cc.Node[]`

---

## 1. Method Signature

```typescript
protected getWinSymbolsInPayLine(payLine: PayLineInfo | PayWayInfo): cc.Node[]
```

---

## 2. Full Source Code

```typescript
protected getWinSymbolsInPayLine(payLine: PayLineInfo | PayWayInfo): cc.Node[] {
    this.mapSymbolToPayLine();
    const symbols = PaylineUtils.getWinIndexesInPayLine(this.matrix, payLine);
    return symbols.map(symbol => this.getSymbol(symbol.reel, symbol.row)).filter(Boolean);
}
```
