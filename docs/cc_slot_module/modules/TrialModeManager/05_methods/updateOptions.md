---
id: "cc_slot_module:TrialModeManager:methods:updateOptions"
title: "TrialModeManager.updateOptions Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "updateOptions"]
---

# 📖 `TrialModeManager.updateOptions()`

---

## 1. Method Overview & Signature

Emits `SET_INTERACTABLE` to child option buttons based on active/inactive scenario list.

```typescript
public updateOptions(options: number[]): void
```

---

## 2. Complete Source Code Implementation

```typescript
updateOptions(options): void {
    if (!this.optionHolder || !this.optionHolder.children) {
        return;
    }
    this.optionHolder.children.forEach((option, index) => {
        let interactable = !options.includes(index);
        option.emit("SET_INTERACTABLE", interactable);
    });
}
```
