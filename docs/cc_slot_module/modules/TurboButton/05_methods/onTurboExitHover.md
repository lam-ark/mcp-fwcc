---
id: "cc_slot_module:TurboButton:methods:onTurboExitHover"
title: "TurboButton.onTurboExitHover Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onTurboExitHover"]
---

# 📖 `TurboButton.onTurboExitHover()`

---

## 1. Method Overview & Signature

Emits `GameLogicUIEvents.TURBO_BUTTON_EXIT_HOVER` to `GameLogic`.

```typescript
public onTurboExitHover(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onTurboExitHover(): void {
    this.gameLogic.emit(GameLogicUIEvents.TURBO_BUTTON_EXIT_HOVER);
}
```
