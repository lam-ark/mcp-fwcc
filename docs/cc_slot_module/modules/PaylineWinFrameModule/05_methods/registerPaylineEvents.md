---
id: "cc_slot_module:PaylineWinFrameModule:method:registerPaylineEvents"
title: "PaylineWinFrameModule.registerPaylineEvents Method"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "methods", "registerPaylineEvents"]
---

# 🚀 `PaylineWinFrameModule.registerPaylineEvents(): void`

---

## 1. Method Signature

```typescript
protected registerPaylineEvents(): void
```

---

## 2. Full Source Code

```typescript
protected registerPaylineEvents(): void {
    if (!this.payLineEmitter) {
        return;
    }

    this.payLineEmitter.on(PaylineEventTypes.SYMBOL_PLAY_ANIMATION_WIN, this.playAnimation, this);
    this.payLineEmitter.on(PaylineEventTypes.PAYLINE_STOP_ALL, this.hideAll, this);
    this.payLineEmitter.on(PaylineEventTypes.PAYLINE_CLEAR, this.clearAll, this);
}
```
