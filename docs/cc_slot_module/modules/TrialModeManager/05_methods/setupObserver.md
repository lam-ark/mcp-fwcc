---
id: "cc_slot_module:TrialModeManager:methods:setupObserver"
title: "TrialModeManager.setupObserver Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `TrialModeManager.setupObserver()`

---

## 1. Method Overview & Signature

Subscribes to `isPopupDisplay`, `tutorialOptions`, and `isTrialModeActive`.

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
    this.trialModel = this.gameLogic.getDataModel().TrialModeData;
    this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
    this.observer.watch(this.trialModel, "isPopupDisplay", (isOpen) => {
        this.updateTrialModePanel(isOpen);
    }, this, { fireImmediately: true });

    this.observer.watch(this.trialModel, "tutorialOptions", (options) => {
        this.updateOptions(options);
    }, this, { fireImmediately: true });

    this.observer.watch(this.uiManagerData, "isTrialModeActive", (isActive) => {
        this.safeCheckTrialMode(isActive);
    }, this, { fireImmediately: true });
}
```
