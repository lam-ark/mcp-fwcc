---
id: "cc_slot_module:SlotButtonModule:methods:onStopClick"
title: "SlotButtonNormal.onStopClick Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onStopClick", "fast_stop"]
---

# 📖 `SlotButtonNormal.onStopClick()`

---

## 1. Method Overview & Signature

Dispatches `STOP_BUTTON_NORMAL_CLICKED` to fast-stop active spinning reels.

```typescript
public onStopClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onStopClick(): void {
    this.gameLogic.emit(GameLogicUIEvents.STOP_BUTTON_NORMAL_CLICKED);
}
```
