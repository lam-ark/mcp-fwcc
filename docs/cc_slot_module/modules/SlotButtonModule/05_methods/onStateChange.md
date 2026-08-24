---
id: "cc_slot_module:SlotButtonModule:methods:onStateChange"
title: "SlotButtonSpine / SlotButtonSprite onStateChange Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonSpine", "SlotButtonSprite", "cc_slot_module", "methods", "onStateChange"]
---

# 📖 `SlotButtonSpine / SlotButtonSprite.onStateChange()`

---

## 1. Method Overview & Signature

Handles `SPIN_BUTTON_STATE_CHANGE` events from the parent controller and switches Spine tracks or 2D SpriteFrames.

```typescript
public onStateChange(state: number, isAutoSpin: boolean = false): void
```

---

## 2. Complete Source Code Implementation

```typescript
// SlotButtonSpine:
onStateChange(state, isAutoSpin: boolean = false): void {
    this.isAutoSpin = isAutoSpin;
    switch (state) {
        case SPIN_BUTTON_STATE_ENUM.NORMAL:
            this.playAnimIdle();
            break;
        case SPIN_BUTTON_STATE_ENUM.HOVER:
            this.playAnimHover();
            break;
        case SPIN_BUTTON_STATE_ENUM.SPINNING:
            this.playAnimSpinToStop();
            break;
    }
    if (state !== SPIN_BUTTON_STATE_ENUM.HOVER && this.isOnHover) {
        this.stopAnimHover();
    }
    this.lastState = state;
}
```
