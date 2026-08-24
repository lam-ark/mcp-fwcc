---
id: "cc_slot_module:UIManagerModule:methods:showFreeGameUI"
title: "UIManagerModule.showFreeGameUI Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showFreeGameUI"]
---

# 📖 `UIManagerModule.showFreeGameUI()`

---

## 1. Method Overview & Signature

Activates free spin button, remaining free spin badge, and switches payline info to free game mode while hiding buy feature.

```typescript
public showFreeGameUI(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showFreeGameUI(): void {
    this.showJackpotUI();
    this.showFreeUIElements();
    this.showFreeSpinControls();
    this.showPaylineInfoFree();
}

showFreeUIElements(): void {
    this.setNodeActive(this.bet, true);
    this.setNodeActive(this.extraBet, true);
    this.setNodeActive(this.wallet, true);
    this.setNodeActive(this.winAmount, true);
    this.setNodeActive(this.turbo, true);
    this.setNodeActive(this.buyFeatureButton, false);
}

showFreeSpinControls(): void {
    this.setNodeActive(this.normalSpinButton, false);
    this.setNodeActive(this.normalSpinTimes, false);
    this.setNodeActive(this.freeSpinButton, true);
    this.setNodeActive(this.freeSpinTimes, true);
}

showPaylineInfoFree(): void {
    this.setNodeOpacity(this.paylineInfoNormalGame, 0);
    this.setNodeOpacity(this.paylineInfoFreeGame, 255);
}
```
