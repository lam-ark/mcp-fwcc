---
id: "cc_slot_module:TurboButton:methods:onTurboClick"
title: "TurboButton.onTurboClick Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onTurboClick"]
---

# 📖 `TurboButton.onTurboClick()`

---

## 1. Method Overview & Signature

Plays sound effect and dispatches `GameLogicUIEvents.TURBO_BUTTON_CLICK` to `GameLogic`.

```typescript
public onTurboClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onTurboClick(): void {
    this.playSfxTurbo();
    this.gameLogic.emit(GameLogicUIEvents.TURBO_BUTTON_CLICK);
}
```
