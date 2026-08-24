---
id: "cc_slot_module:UIManagerModule:methods:onSwitchMode"
title: "UIManagerModule.onSwitchMode Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "onSwitchMode"]
---

# 📖 `UIManagerModule.onSwitchMode()`

---

## 1. Method Overview & Signature

Synchronizes trial mode status flags across local cache, `GameDataStore`, and `SlotGameSettings` while resetting primary round data.

```typescript
public onSwitchMode(isTrialModeActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSwitchMode(isTrialModeActive: boolean): void {
    this.isTrialMode = isTrialModeActive;
    this.dataStore.resetDataPS();
    this.dataStore.isTrialMode = isTrialModeActive;
    this.gameSettings.isTrialMode = isTrialModeActive;
}
```
