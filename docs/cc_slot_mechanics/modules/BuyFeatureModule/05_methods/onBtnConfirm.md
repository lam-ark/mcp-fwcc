---
id: "cc_slot_mechanics:BuyFeatureModule:methods:onBtnConfirm"
title: "BuyFeatureModule.onBtnConfirm Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "onBtnConfirm"]
---

# 📖 `BuyFeatureModule.onBtnConfirm()`

---

## 1. Method Signature & Overview

```typescript
onBtnConfirm(): void
```

- **Primary Role**: Implements onBtnConfirm within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onBtnConfirm(): void {
		this.soundPlayer && this.soundPlayer.playSFXClick()
		if (this._betData) {
			this.gameLogic.emit(GameLogicUIEvents.SEND_BUY_FEATURE_SPIN_REQUEST, this._betData.betKey, this._buyFeatureConfig.PREFIX_EXTRA_BET);
		}
	}
```
