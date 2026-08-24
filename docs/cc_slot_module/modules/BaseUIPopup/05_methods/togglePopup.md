---
id: "cc_slot_module:BaseUIPopup:methods:togglePopup"
title: "BaseUIPopup.togglePopup Method"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "methods", "togglePopup"]
---

# 📖 `BaseUIPopup.togglePopup()`

---

## 1. Method Overview & Signature

Performs animated show or hide transition via `popupBehavior`, preventing redundant calls with `currentIsActive`.

```typescript
public togglePopup(isActive: boolean, cb?: () => void): void
```

---

## 2. Complete Source Code Implementation

```typescript
togglePopup(isActive: boolean, cb?: () => void): void {
    if (this.currentIsActive === isActive) {
        return;
    }
    this.currentIsActive = isActive;
    this.isClose = !isActive;
    if (isActive) {
        this.popupBehavior.showPopup(cb);
    } else {
        this.popupBehavior.hidePopup(cb);
    }
}
```
