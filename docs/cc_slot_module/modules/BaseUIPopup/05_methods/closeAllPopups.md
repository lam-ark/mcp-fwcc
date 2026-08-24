---
id: "cc_slot_module:BaseUIPopup:methods:closeAllPopups"
title: "BaseUIPopup.closeAllPopups Method"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "methods", "closeAllPopups"]
---

# 📖 `BaseUIPopup.closeAllPopups()`

---

## 1. Method Overview & Signature

Plays click SFX and broadcasts `GameLogicUIEvents.CLOSE_ALL_POPUPS` to dismiss all active modals.

```typescript
public closeAllPopups(): void
```

---

## 2. Complete Source Code Implementation

```typescript
closeAllPopups(): void {
    this.playSfxClick();
    this.gameLogic.emit(GameLogicUIEvents.CLOSE_ALL_POPUPS);
}
```
