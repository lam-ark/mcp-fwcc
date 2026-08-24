---
id: "cc_slot_module:UIManagerModule:methods:showJackpotUI"
title: "UIManagerModule.showJackpotUI Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showJackpotUI"]
---

# 📖 `UIManagerModule.showJackpotUI()`

---

## 1. Method Overview & Signature

Swaps visibility between the real progressive jackpot banner and the demo trial jackpot counter based on `gameSettings.isTrialMode`.

```typescript
public showJackpotUI(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showJackpotUI(): void {
    if (this.gameSettings.isTrialMode) {
        this.setNodeActive(this.jackpot, false);
        this.setNodeActive(this.trialJackpot, true);
    } else {
        this.setNodeActive(this.trialJackpot, false);
        this.setNodeActive(this.jackpot, true);
    }
}
```
