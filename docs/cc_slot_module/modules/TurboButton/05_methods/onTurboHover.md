---
id: "cc_slot_module:TurboButton:methods:onTurboHover"
title: "TurboButton.onTurboHover Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onTurboHover"]
---

# 📖 `TurboButton.onTurboHover()`

---

## 1. Method Overview & Signature

Emits `GameLogicUIEvents.TURBO_BUTTON_HOVER` to `GameLogic`.

```typescript
public onTurboHover(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onTurboHover(): void {
    this.gameLogic.emit(GameLogicUIEvents.TURBO_BUTTON_HOVER);
}
```
