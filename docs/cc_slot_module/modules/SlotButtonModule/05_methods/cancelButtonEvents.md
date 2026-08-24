---
id: "cc_slot_module:SlotButtonModule:methods:cancelButtonEvents"
title: "SlotButtonNormal.cancelButtonEvents Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "cancelButtonEvents"]
---

# 📖 `SlotButtonNormal.cancelButtonEvents()`

---

## 1. Method Overview & Signature

Aborts active touches, resets child Button component interaction states, and unschedules active hold timers.

```typescript
public cancelButtonEvents(): void
```

---

## 2. Complete Source Code Implementation

```typescript
cancelButtonEvents(): void {
    this.display.emit(Node.EventType.TOUCH_CANCEL);
    const buttons = this.node.getComponentsInChildren(Button);
    buttons.forEach(button => {
        const lastState = button.interactable;
        button.interactable = false;
        button.interactable = lastState;
    });
    if (this.holdAction) {
        this.unschedule(this.holdAction);
        this.holdAction = null;
        this.isHold = false;
    }
}
```
