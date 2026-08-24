---
id: "cc_slot_module:TrialModeManager:methods:playOption"
title: "TrialModeManager.playOption Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "playOption"]
---

# 📖 `TrialModeManager.playOption()`

---

## 1. Method Overview & Signature

Dispatches `GameLogicUIEvents.PLAY_TUTORIAL_OPTION` to trigger the selected demo script.

```typescript
public playOption(_event: any, option: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
playOption(_event, option): void {
    this.gameLogic.emit(GameLogicUIEvents.PLAY_TUTORIAL_OPTION, Number(option));
}
```
