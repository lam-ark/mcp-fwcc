---
id: "cc_slot_module:PaylineSymbolModule:method:playSymbolAnimation"
title: "PaylineSymbolModule.playSymbolAnimation Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "playSymbolAnimation"]
---

# 🚀 `PaylineSymbolModule.playSymbolAnimation(symbol, duration): void`

---

## 1. Method Signature

```typescript
protected playSymbolAnimation(symbol: cc.Node, duration?: number): void
```

---

## 2. Full Source Code

```typescript
protected playSymbolAnimation(symbol: cc.Node, duration?: number): void {
    if (!symbol) {
        return;
    }

    eno.changeParent(symbol, this.container);
    const loop = this.paylineConfig.PLAY_ANIMATION_LOOP || false;
    symbol.active = true;
    symbol.emit('ENABLE_HIGHLIGHT');
    symbol.emit('PLAY_ANIMATION_WIN', loop, duration);
    this.payLineEmitter.emit(PaylineEventTypes.SYMBOL_PLAY_ANIMATION_WIN, { symbol, loop, duration });
}
```
