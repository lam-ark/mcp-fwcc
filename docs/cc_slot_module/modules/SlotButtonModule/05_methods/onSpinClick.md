---
id: "cc_slot_module:SlotButtonModule:methods:onSpinClick"
title: "SlotButtonNormal.onSpinClick Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onSpinClick"]
---

# 📖 `SlotButtonNormal.onSpinClick()`

---

## 1. Method Overview & Signature

Handles normal spin click execution if not currently switching modes and not suppressed by a hold-to-auto gesture.

```typescript
public onSpinClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSpinClick(): void {
    if (this._isSwitchingMode) {
        return;
    }
    if (!this.isHold) {
        this.gameLogic.emit(GameLogicUIEvents.NORMAL_SPIN_CLICKED);
    }
    this.isHold = false;
}
```
