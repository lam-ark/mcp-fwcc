---
id: "cc_slot_module:PaylineSymbolModule:method:showIdleSymbols"
title: "PaylineSymbolModule.showIdleSymbols Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "showIdleSymbols"]
---

# 🚀 `PaylineSymbolModule.showIdleSymbols(symbols): void`

---

## 1. Method Signature

```typescript
protected showIdleSymbols(symbols: cc.Node[]): void
```

---

## 2. Full Source Code

```typescript
protected showIdleSymbols(symbols: cc.Node[]): void {
    if (!symbols || symbols.length === 0) {
        symbols = this.symbols;
    }

    for (const symbol of symbols) {
        eno.changeParent(symbol, this.container);
        symbol.emit('ENABLE_HIGHLIGHT');
        if (!SlotSymbolModule.getModuleComponent(symbol).getIsPlaying()) {
            symbol.emit('PLAY_ANIMATION_IDLE');
        }
    }
    this.updateSymbolSiblingIndex(symbols);
}
```
