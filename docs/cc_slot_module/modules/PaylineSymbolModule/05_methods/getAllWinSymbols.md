---
id: "cc_slot_module:PaylineSymbolModule:method:getAllWinSymbols"
title: "PaylineSymbolModule.getAllWinSymbols Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "getAllWinSymbols"]
---

# 🚀 `PaylineSymbolModule.getAllWinSymbols(): cc.Node[]`

---

## 1. Method Signature

```typescript
protected getAllWinSymbols(): cc.Node[]
```

---

## 2. Full Source Code

```typescript
protected getAllWinSymbols(): cc.Node[] {
    this.mapSymbolToPayLine();
    const symbols = PaylineUtils.getAllWinSymbols(this.matrix, this.payLines);
    return symbols.map(symbol => this.getSymbol(symbol.reel, symbol.row)).filter(Boolean);
}
```
