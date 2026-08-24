---
id: "cc_slot_module:TurboButton:methods:onTurboCancel"
title: "TurboButton.onTurboCancel Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onTurboCancel"]
---

# 📖 `TurboButton.onTurboCancel()`

---

## 1. Method Overview & Signature

Emits `GameLogicUIEvents.TURBO_BUTTON_CANCEL` to `GameLogic`.

```typescript
public onTurboCancel(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onTurboCancel(): void {
    this.gameLogic.emit(GameLogicUIEvents.TURBO_BUTTON_CANCEL);
}
```
