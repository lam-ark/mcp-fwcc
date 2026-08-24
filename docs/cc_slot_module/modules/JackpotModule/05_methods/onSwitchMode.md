---
id: "cc_slot_module:JackpotModule:methods:onSwitchMode"
title: "JackpotModule.onSwitchMode Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "onSwitchMode"]
---

# 📖 `JackpotModule.onSwitchMode()`

---

## 1. Method Overview & Signature

Resumes jackpot ticker when entering trial mode.

```typescript
public onSwitchMode(isTrialModeActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSwitchMode(isTrialModeActive: boolean): void {
    if (isTrialModeActive) {
        this.resumeJackpot();
    }
}
```
