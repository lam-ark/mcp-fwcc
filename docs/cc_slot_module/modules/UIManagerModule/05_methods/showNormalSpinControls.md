---
id: "cc_slot_module:UIManagerModule:methods:showNormalSpinControls"
title: "UIManagerModule.showNormalSpinControls Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showNormalSpinControls"]
---

# 📖 `UIManagerModule.showNormalSpinControls()`

---

## 1. Method Overview & Signature

Activates normal spin button and remaining auto-spin count badge while deactivating free spin controls.

```typescript
public showNormalSpinControls(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showNormalSpinControls(): void {
    this.setNodeActive(this.normalSpinButton, true);
    this.setNodeActive(this.normalSpinTimes, true);
    this.setNodeActive(this.freeSpinButton, false);
    this.setNodeActive(this.freeSpinTimes, false);
}
```
