---
id: "cc_slot_module:PaylineLineModule:methods:registerPaylineEvents"
title: "PaylineLineModule.registerPaylineEvents Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "registerPaylineEvents"]
---

# 📖 `PaylineLineModule.registerPaylineEvents()`

---

## 1. Method Overview & Signature

Subscribes to internal `payLineEmitter` events.

```typescript
protected registerPaylineEvents(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected registerPaylineEvents(): void {
    if (!this.payLineEmitter) {
        return;
    }

    this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SET_DATA, this.setupPaylines, this);
    this.payLineEmitter.on(PaylineEventTypes.PAYLINE_BLINK_ALL, this.blinkAllPayLines, this);
    this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_LINE, this.showPayLine, this);
    this.payLineEmitter.on(PaylineEventTypes.PAYLINE_STOP_ALL, this.hideAll, this);
    this.payLineEmitter.on(PaylineEventTypes.PAYLINE_CLEAR, this.clearAll, this);
}
```
