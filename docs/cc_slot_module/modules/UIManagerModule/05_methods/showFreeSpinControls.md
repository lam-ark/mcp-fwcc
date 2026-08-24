---
id: "cc_slot_module:UIManagerModule:methods:showFreeSpinControls"
title: "UIManagerModule.showFreeSpinControls Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showFreeSpinControls"]
---

# 📖 `UIManagerModule.showFreeSpinControls()`

---

## 1. Method Overview & Signature

Activates free spin button and remaining free spin count badge while deactivating normal spin controls.

```typescript
public showFreeSpinControls(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showFreeSpinControls(): void {
    this.setNodeActive(this.normalSpinButton, false);
    this.setNodeActive(this.normalSpinTimes, false);
    this.setNodeActive(this.freeSpinButton, true);
    this.setNodeActive(this.freeSpinTimes, true);
}
```
