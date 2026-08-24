---
id: "cc_slot_module:UIManagerModule:methods:checkDisplayPopup"
title: "UIManagerModule.checkDisplayPopup Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "checkDisplayPopup", "input_guard"]
---

# 📖 `UIManagerModule.checkDisplayPopup()`

---

## 1. Method Overview & Signature

Determines whether any popup or cutscene is actively blocking player input, and caches the result into `uiManagerData`.

```typescript
public checkDisplayPopup(): boolean
```

---

## 2. Complete Source Code Implementation

```typescript
checkDisplayPopup(): boolean {
    const isDisplay = this.popupControl.isDisplayPopup() || this.cutsceneControl.isDisplayCutscene() || !this.isSpinVisible();
    this.uiManagerData.setDisplayPopup(isDisplay);
    return isDisplay;
}
```
