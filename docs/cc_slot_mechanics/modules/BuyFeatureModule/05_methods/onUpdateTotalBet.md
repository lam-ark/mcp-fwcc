---
id: "cc_slot_mechanics:BuyFeatureModule:methods:onUpdateTotalBet"
title: "BuyFeatureModule.onUpdateTotalBet Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "onUpdateTotalBet"]
---

# 📖 `BuyFeatureModule.onUpdateTotalBet()`

---

## 1. Method Signature & Overview

```typescript
onUpdateTotalBet(betValue: number): void
```

- **Primary Role**: Implements onUpdateTotalBet within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onUpdateTotalBet(betValue: number): void {
		this.lbBetValue.node.emit("ON_UPDATE_VALUE", betValue);
		this.lbTotalBet.node.emit("ON_UPDATE_VALUE", this.getTotalExtraBet());
	}
```
