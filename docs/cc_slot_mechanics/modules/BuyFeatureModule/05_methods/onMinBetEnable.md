---
id: "cc_slot_mechanics:BuyFeatureModule:methods:onMinBetEnable"
title: "BuyFeatureModule.onMinBetEnable Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "onMinBetEnable"]
---

# 📖 `BuyFeatureModule.onMinBetEnable()`

---

## 1. Method Signature & Overview

```typescript
onMinBetEnable(minBetEnable: boolean): void
```

- **Primary Role**: Implements onMinBetEnable within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onMinBetEnable(minBetEnable: boolean): void {
		this.btnDecreaseBet.interactable = minBetEnable;
	}
```
