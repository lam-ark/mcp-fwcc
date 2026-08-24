---
id: "cc_slot_module:PaylineSymbolModule:method:showSpecialSymbolById"
title: "PaylineSymbolModule.showSpecialSymbolById Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "showSpecialSymbolById"]
---

# 🚀 `PaylineSymbolModule.showSpecialSymbolById(symbolId, duration): void`

---

## 1. Method Signature

```typescript
protected showSpecialSymbolById(symbolId: string, duration?: number): void
```

---

## 2. Full Source Code

```typescript
protected showSpecialSymbolById(symbolId: string, duration?: number): void {
    if (symbolId) {
        const symbolSet: cc.Node[] = this.symbols.filter(symbol => symbol["symbolCode"] === symbolId);
        this.showListWinSymbols(symbolSet, duration);
    }
}
```
