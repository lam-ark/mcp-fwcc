---
id: "cc_slot_module:PaylineSymbolModule:method:registerPaylineEvents"
title: "PaylineSymbolModule.registerPaylineEvents Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "registerPaylineEvents"]
---

# 🚀 `PaylineSymbolModule.registerPaylineEvents(): void`

---

## 1. Method Signature

```typescript
protected registerPaylineEvents(): void
```

---

## 2. Full Source Code

```typescript
protected registerPaylineEvents(): void {
    if (this.payLineEmitter) {
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SET_DATA, this.setupPayLines, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_BLINK_ALL, this.blinkAllPayLines, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_STOP_ALL, this.stopAllPayLines, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_DIM_ALL, this.dimAllPayLines, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_LINE, this.showSinglePayLine, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_SPECIAL_SYMBOL, this.showSpecialSymbolById, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_JACKPOT_LINE, this.showJackpotLine, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_CLEAR, this.clearAll, this);
    }

    if (this.moduleEvent) {
        this.moduleEvent.on("SHOW_IDLE_SYMBOLS", this.showIdleSymbols, this);
    }
}
```
