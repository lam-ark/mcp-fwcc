---
id: "cc_slot_module:UIManagerModule:methods:setupObserver"
title: "UIManagerModule.setupObserver Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `UIManagerModule.setupObserver()`

---

## 1. Method Overview & Signature

Subscribes to `isTrialModeActive` property changes on `UIManagerData` with `fireImmediately: true`.

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
    this.observer.watch(this.uiManagerData, "isTrialModeActive", (isTrialModeActive) => {
        this.onSwitchMode(isTrialModeActive);
    }, this, { fireImmediately: true });
}
```
