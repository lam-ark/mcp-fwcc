---
id: "cc_slot_mechanics:BuyFeatureModule:methods:setupObserver"
title: "BuyFeatureModule.setupObserver Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "setupObserver"]
---

# 📖 `BuyFeatureModule.setupObserver()`

---

## 1. Method Signature & Overview

```typescript
setupObserver(): void
```

- **Primary Role**: Implements setupObserver within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this.observer.watch(this.uiManagerData, "isBuyFeaturePanelOpen", (isOpen) => {
			this.node.active = isOpen;
			setOpacity(this.node, isOpen ? 255 : 0);
		}, this, { fireImmediately: true });

		this.observer.watch(this._betData, "totalBet", this.onUpdateTotalBet.bind(this), this, { fireImmediately: true });
		this.observer.watch(this._betData, "minBetEnable", this.onMinBetEnable.bind(this), this, { canTriggerSameValue: true });
		this.observer.watch(this._betData, "maxBetEnable", this.onMaxBetEnable.bind(this), this, { canTriggerSameValue: true });
	}
```
