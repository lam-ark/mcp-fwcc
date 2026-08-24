---
id: "cc_slot_module:SlotButtonModule:methods:onSpinExitHover"
title: "SlotButtonNormal.onSpinExitHover Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onSpinExitHover"]
---

# 📖 `SlotButtonNormal.onSpinExitHover()`

---

## 1. Method Overview & Signature

Cancels touches and dispatches `NORMAL_SPIN_CANCEL_HOVERED` on desktop cursor exit.

```typescript
public onSpinExitHover(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSpinExitHover(): void {
    this.onTouchCancel();
    this.gameLogic.emit(GameLogicUIEvents.NORMAL_SPIN_CANCEL_HOVERED);
}
```
