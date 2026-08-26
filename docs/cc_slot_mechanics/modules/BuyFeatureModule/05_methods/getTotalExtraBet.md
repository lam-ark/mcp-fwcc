---
id: "cc_slot_mechanics:BuyFeatureModule:methods:getTotalExtraBet"
title: "BuyFeatureModule.getTotalExtraBet Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "getTotalExtraBet"]
---

# 📖 `BuyFeatureModule.getTotalExtraBet()`

---

## 1. Method Signature & Overview

```typescript
getTotalExtraBet(): number
```

- **Primary Role**: Implements getTotalExtraBet within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getTotalExtraBet(): number {
		const betManager = this.gameLogic.getBetManager();
		const totalExtraBet = betManager.getTotalExtraBet(this._betData.betKey, this._buyFeatureConfig.PREFIX_EXTRA_BET);
		return totalExtraBet;
	}
```
