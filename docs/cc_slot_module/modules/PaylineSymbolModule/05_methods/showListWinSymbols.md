---
id: "cc_slot_module:PaylineSymbolModule:method:showListWinSymbols"
title: "PaylineSymbolModule.showListWinSymbols Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "showListWinSymbols"]
---

# 🚀 `PaylineSymbolModule.showListWinSymbols(symbolSet, duration): void`

---

## 1. Method Signature

```typescript
protected showListWinSymbols(symbolSet: cc.Node[], duration?: number): void
```

---

## 2. Full Source Code

```typescript
protected showListWinSymbols(symbolSet: cc.Node[], duration?: number): void {
    if (symbolSet.length === 0) {
        return;
    }

    this.dimAllPayLines(symbolSet);

    for (const symbol of symbolSet) {
        this.playSymbolAnimation(symbol, duration);
    }

    this.updateSymbolSiblingIndex();
}
```
