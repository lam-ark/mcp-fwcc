---
id: "cc_slot_module:TrialModeManager:methods:onLoadExtend"
title: "TrialModeManager.onLoadExtend Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `TrialModeManager.onLoadExtend()`

---

## 1. Method Overview & Signature

Initializes trial mode settings, emits `INIT_TRIAL_MODE`, and configures observers.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.hideTrialModePanel();
    this.gameLogic.emit(GameLogicUIEvents.INIT_TRIAL_MODE, this.trialModeData);
    this.setupObserver();
}
```
