---
id: "cc_slot_module:UIManagerModule:methods:hideAllUI"
title: "UIManagerModule.hideAllUI Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "hideAllUI"]
---

# 📖 `UIManagerModule.hideAllUI()`

---

## 1. Method Overview & Signature

Synchronously deactivates all child dashboard elements, promotion badges, spin controls, and payline info banners.

```typescript
public hideAllUI(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideAllUI(): void {
    this.hideUIElements();
    this.hidePromotionUI();
    this.hideSpinControls();
    this.hidePaylineInfo();
}

hideUIElements(): void {
    this.setNodeActive(this.jackpot, false);
    this.setNodeActive(this.trialJackpot, false);
    this.setNodeActive(this.bet, false);
    this.setNodeActive(this.extraBet, false);
    this.setNodeActive(this.wallet, false);
    this.setNodeActive(this.winAmount, false);
    this.setNodeActive(this.turbo, false);
    this.setNodeActive(this.buyFeatureButton, false);
}

hidePromotionUI(): void {
    this.promotionUI.forEach((node) => {
        node.active = false;
    });
}

hideSpinControls(): void {
    this.setNodeActive(this.normalSpinButton, false);
    this.setNodeActive(this.freeSpinButton, false);
    this.setNodeActive(this.normalSpinTimes, false);
    this.setNodeActive(this.freeSpinTimes, false);
}

hidePaylineInfo(): void {
    this.setNodeOpacity(this.paylineInfoNormalGame, 0);
    this.setNodeOpacity(this.paylineInfoFreeGame, 0);
}
```
