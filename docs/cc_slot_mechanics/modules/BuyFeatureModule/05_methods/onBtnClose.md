---
id: "cc_slot_mechanics:BuyFeatureModule:methods:onBtnClose"
title: "BuyFeatureModule.onBtnClose Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "onBtnClose"]
---

# 📖 `BuyFeatureModule.onBtnClose()`

---

## 1. Method Signature & Overview

```typescript
onBtnClose(): void
```

- **Primary Role**: Implements onBtnClose within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onBtnClose(): void {
		this.soundPlayer && this.soundPlayer.playSFXClick()
		this.closePanel();
	}
```
