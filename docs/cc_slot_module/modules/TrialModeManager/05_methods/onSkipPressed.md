---
id: "cc_slot_module:TrialModeManager:methods:onSkipPressed"
title: "TrialModeManager.onSkipPressed Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "onSkipPressed"]
---

# 📖 `TrialModeManager.onSkipPressed()`

---

## 1. Method Overview & Signature

Emits `GameLogicUIEvents.SKIP_TRIAL_DATA` to bypass tutorial/scenario selection.

```typescript
public onSkipPressed(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSkipPressed(): void {
    this.gameLogic.emit(GameLogicUIEvents.SKIP_TRIAL_DATA);
}
```
