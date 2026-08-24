---
id: "cc_slot_module:TurboButton:methods:onTurboPressed"
title: "TurboButton.onTurboPressed Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onTurboPressed"]
---

# 📖 `TurboButton.onTurboPressed()`

---

## 1. Method Overview & Signature

Emits `GameLogicUIEvents.TURBO_BUTTON_PRESSED` to `GameLogic`.

```typescript
public onTurboPressed(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onTurboPressed(): void {
    this.gameLogic.emit(GameLogicUIEvents.TURBO_BUTTON_PRESSED);
}
```
