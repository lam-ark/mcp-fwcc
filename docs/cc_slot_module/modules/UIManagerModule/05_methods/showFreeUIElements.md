---
id: "cc_slot_module:UIManagerModule:methods:showFreeUIElements"
title: "UIManagerModule.showFreeUIElements Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showFreeUIElements"]
---

# 📖 `UIManagerModule.showFreeUIElements()`

---

## 1. Method Overview & Signature

Activates bet, extra bet, wallet, win amount, and turbo buttons while deactivating feature buy during free games.

```typescript
public showFreeUIElements(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showFreeUIElements(): void {
    this.setNodeActive(this.bet, true);
    this.setNodeActive(this.extraBet, true);
    this.setNodeActive(this.wallet, true);
    this.setNodeActive(this.winAmount, true);
    this.setNodeActive(this.turbo, true);
    this.setNodeActive(this.buyFeatureButton, false);
}
```
