---
id: "cc_slot_module:TrialModeManager:methods:updateTrialModePanel"
title: "TrialModeManager.updateTrialModePanel Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "updateTrialModePanel"]
---

# 📖 `TrialModeManager.updateTrialModePanel()`

---

## 1. Method Overview & Signature

Toggles visibility and opacity of `trialModePanel`.

```typescript
public updateTrialModePanel(isOpen: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
updateTrialModePanel(isOpen): void {
    if (this.useSelectionPanel && this.trialModePanel) {
        this.trialModePanel.active = isOpen;
        setOpacity(this.trialModePanel, isOpen ? 255 : 0);
    }
}
```
