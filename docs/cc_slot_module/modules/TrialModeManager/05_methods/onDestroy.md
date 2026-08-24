---
id: "cc_slot_module:TrialModeManager:methods:onDestroy"
title: "TrialModeManager.onDestroy Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `TrialModeManager.onDestroy()`

---

## 1. Method Overview & Signature

Releases reactive observers registered on `trialModel` and `uiManagerData`.

```typescript
protected onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected onDestroy(): void {
    this.observer.releaseAll(this.trialModel, this);
    this.observer.releaseAll(this.uiManagerData, this);
}
```
