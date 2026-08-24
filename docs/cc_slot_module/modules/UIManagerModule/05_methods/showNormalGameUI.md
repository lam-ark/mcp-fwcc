---
id: "cc_slot_module:UIManagerModule:methods:showNormalGameUI"
title: "UIManagerModule.showNormalGameUI Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showNormalGameUI"]
---

# 📖 `UIManagerModule.showNormalGameUI()`

---

## 1. Method Overview & Signature

Activates jackpot header, promotional badges, base betting elements, normal spin button, and normal payline info.

```typescript
public showNormalGameUI(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showNormalGameUI(): void {
    this.showJackpotUI();
    this.showPromotionUI();
    this.showNormalUIElements();
    this.showNormalSpinControls();
    this.showNormalPaylineInfo();
}

showPromotionUI(): void {
    const isActive = this.promotionDataModel.isActive;
    this.promotionUI.forEach((node) => {
        node.active = isActive;
    });
}

showNormalUIElements(): void {
    this.setNodeActive(this.bet, true);
    this.setNodeActive(this.extraBet, true);
    this.setNodeActive(this.wallet, true);
    this.setNodeActive(this.winAmount, true);
    this.setNodeActive(this.turbo, true);
    this.setNodeActive(this.buyFeatureButton, true);
}

showNormalSpinControls(): void {
    this.setNodeActive(this.normalSpinButton, true);
    this.setNodeActive(this.normalSpinTimes, true);
    this.setNodeActive(this.freeSpinButton, false);
    this.setNodeActive(this.freeSpinTimes, false);
}

showNormalPaylineInfo(): void {
    this.setNodeOpacity(this.paylineInfoNormalGame, 255);
    this.setNodeOpacity(this.paylineInfoFreeGame, 0);
}
```
