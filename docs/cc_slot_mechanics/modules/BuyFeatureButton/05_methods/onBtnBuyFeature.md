---
id: "cc_slot_mechanics:BuyFeatureButton:methods:onBtnBuyFeature"
title: "BuyFeatureButton.onBtnBuyFeature Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureButton", "buy_feature_button", "cc_slot_mechanics", "methods", "onBtnBuyFeature"]
---

# 📖 `BuyFeatureButton.onBtnBuyFeature()`

---

## 1. Method Signature & Overview

```typescript
onBtnBuyFeature(): void
```

- **Primary Role**: Implements onBtnBuyFeature within the BuyFeatureButton mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onBtnBuyFeature(): void {
		if (!this.gameConfig.HAS_BUY_FEATURE) {
			error('Buy feature is not enabled');
			return;
		}
		this.soundPlayer && this.soundPlayer.playSFXClick()
		this.gameLogic.emit(GameLogicUIEvents.OPEN_BUY_FEATURE_PANEL);
	}
```
