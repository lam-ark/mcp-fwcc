---
id: "cc_slot_module:TrialModeManager:methods:hideTrialModePanel"
title: "TrialModeManager.hideTrialModePanel Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "hideTrialModePanel"]
---

# 📖 `TrialModeManager.hideTrialModePanel()`

---

## 1. Method Overview & Signature

Deactivates and zeroes opacity on `trialModePanel`.

```typescript
public hideTrialModePanel(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideTrialModePanel(): void {
    if (this.trialModePanel) {
        this.trialModePanel.active = false;
        setOpacity(this.trialModePanel, 0);
    }
}
```
