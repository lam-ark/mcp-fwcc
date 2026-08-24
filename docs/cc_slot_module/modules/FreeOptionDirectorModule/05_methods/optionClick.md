---
id: "cc_slot_module:FreeOptionDirectorModule:method:optionClick"
title: "FreeOptionDirectorModule.optionClick() Method Specification"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "method", "optionClick", "SEND_FREE_OPTION_REQUEST"]
---

# `FreeOptionDirectorModule.optionClick(ev: any, optionId: number): void`

---

## 1. Method Signature
```typescript
public optionClick(ev: any, optionId: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Extracts `selectedOption = Number(optionId ? optionId : ev.target.optionId)`.
2. Loops through `this.options` and sets `option.optionNode.getComponent(Button).interactable = false` to prevent multiple touches.
3. Emits `this.gameLogic.emit(GameLogicUIEvents.SEND_FREE_OPTION_REQUEST, selectedOption)`.
4. Stops countdown timer via `this.stopCountDown()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
optionClick(ev: any, optionId: number): void {
    const selectedOption = Number(optionId ? optionId : ev.target.optionId);
    this.options.forEach((option) => {
        option.optionNode.getComponent(Button).interactable = false;
    });
    this.gameLogic.emit(GameLogicUIEvents.SEND_FREE_OPTION_REQUEST, selectedOption);
    this.stopCountDown();
}
```
