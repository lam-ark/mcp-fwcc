---
id: "cc_slot_module:PaylineSymbolModule:method:updateSymbolSiblingIndex"
title: "PaylineSymbolModule.updateSymbolSiblingIndex Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "updateSymbolSiblingIndex"]
---

# 🚀 `PaylineSymbolModule.updateSymbolSiblingIndex(symbols): void`

---

## 1. Method Signature

```typescript
protected updateSymbolSiblingIndex(symbols: cc.Node[] = []): void
```

---

## 2. Full Source Code

```typescript
protected updateSymbolSiblingIndex(symbols: cc.Node[] = []): void {
    if (!symbols || symbols.length === 0) {
        symbols = this.symbols;
    }

    if (this.disableHighlightContainer) {
        for (const symbol of symbols) {
            if (symbol['isHighlight'] === false) {
                eno.changeParent(symbol, this.disableHighlightContainer);
            }
        }
    }

    this.factory.updateSymbolSiblingIndex(symbols);
}
```
