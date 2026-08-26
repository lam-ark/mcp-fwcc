---
id: "cc_slot_mechanics:BuyFeatureModule:methods:updateBuyButton"
title: "BuyFeatureModule.updateBuyButton Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "updateBuyButton"]
---

# 📖 `BuyFeatureModule.updateBuyButton()`

---

## 1. Method Signature & Overview

```typescript
updateBuyButton(): void
```

- **Primary Role**: Implements updateBuyButton within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
updateBuyButton(): void {
		const totalBet = this.getTotalExtraBet();
		this.btnBuyFeature.interactable = this.gameLogic.getWalletManager().hasEnoughBalance(totalBet);
	}
```
