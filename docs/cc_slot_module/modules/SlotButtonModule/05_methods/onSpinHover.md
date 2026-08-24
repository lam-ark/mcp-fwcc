---
id: "cc_slot_module:SlotButtonModule:methods:onSpinHover"
title: "SlotButtonNormal.onSpinHover Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onSpinHover"]
---

# 📖 `SlotButtonNormal.onSpinHover()`

---

## 1. Method Overview & Signature

Dispatches `NORMAL_SPIN_HOVERED` on desktop cursor entry to trigger hover animations.

```typescript
public onSpinHover(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSpinHover(): void {
    this.gameLogic.emit(GameLogicUIEvents.NORMAL_SPIN_HOVERED);
}
```
