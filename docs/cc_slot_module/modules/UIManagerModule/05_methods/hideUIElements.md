---
id: "cc_slot_module:UIManagerModule:methods:hideUIElements"
title: "UIManagerModule.hideUIElements Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "hideUIElements"]
---

# 📖 `UIManagerModule.hideUIElements()`

---

## 1. Method Overview & Signature

Deactivates core betting, wallet, jackpot, turbo, and feature buy nodes.

```typescript
public hideUIElements(): void
```

---

## 2. Complete Source Code Implementation

```typescript
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
```
