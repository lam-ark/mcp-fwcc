---
id: "cc_slot_module:SlotButtonModule:methods:onKeyUp"
title: "SlotButtonModule.onKeyUp Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "methods", "onKeyUp", "spacebar"]
---

# 📖 `SlotButtonModule.onKeyUp()`

---

## 1. Method Overview & Signature

Captures Spacebar key release events and dispatches `TRIGGER_SPACE_BUTTON` after validating that no popup or cutscene is blocking input.

```typescript
public onKeyUp(event: cc.Event.EventKeyboard): void
```

---

## 2. Complete Source Code Implementation

```typescript
onKeyUp(event): void {
    if (event.keyCode == cc.macro.KEY.space && !this.uiManager.checkDisplayPopup() && !this.gameLogic.getUIManager().hasBlockingPopup()) {
        this.gameLogic.emit(GameLogicUIEvents.TRIGGER_SPACE_BUTTON);
    }
}
```
