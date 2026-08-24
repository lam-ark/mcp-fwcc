---
id: "cc_slot_module:TurboButton:methods:listenEvents"
title: "TurboButton.listenEvents Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "listenEvents"]
---

# 📖 `TurboButton.listenEvents()`

---

## 1. Method Overview & Signature

Attaches mouse and touch interaction listeners to the `display` node.

```typescript
public listenEvents(): void
```

---

## 2. Complete Source Code Implementation

```typescript
listenEvents(): void {
    this.display.on(Node.EventType.MOUSE_ENTER, this.onTurboHover, this);
    this.display.on(Node.EventType.MOUSE_LEAVE, this.onTurboExitHover, this);
    this.display.on(Node.EventType.TOUCH_START, this.onTurboPressed, this);
    this.display.on(Node.EventType.TOUCH_END, this.onTurboClick, this);
    this.display.on(Node.EventType.TOUCH_CANCEL, this.onTurboCancel, this);
}
```
