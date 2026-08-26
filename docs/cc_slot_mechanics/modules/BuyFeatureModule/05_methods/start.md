---
id: "cc_slot_mechanics:BuyFeatureModule:methods:start"
title: "BuyFeatureModule.start Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "start"]
---

# 📖 `BuyFeatureModule.start()`

---

## 1. Method Signature & Overview

```typescript
start(): void
```

- **Primary Role**: Implements start within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected start(): void {
		this._betData = this.gameLogic && this.gameLogic.getDataModel() && this.gameLogic.getDataModel().BetData;
		this.setupObserver();
	}
```
