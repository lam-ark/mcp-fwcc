---
id: "cc_slot_mechanics:BuyFeatureModule:methods:onMaxBetEnable"
title: "BuyFeatureModule.onMaxBetEnable Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "onMaxBetEnable"]
---

# 📖 `BuyFeatureModule.onMaxBetEnable()`

---

## 1. Method Signature & Overview

```typescript
onMaxBetEnable(maxBetEnable: boolean): void
```

- **Primary Role**: Implements onMaxBetEnable within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onMaxBetEnable(maxBetEnable: boolean): void {
		this.btnIncreaseBet.interactable = maxBetEnable;
	}
```
