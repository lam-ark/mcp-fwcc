---
id: "cc_slot_mechanics:BuyFeatureButton:methods:onLoadExtend"
title: "BuyFeatureButton.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureButton", "buy_feature_button", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `BuyFeatureButton.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the BuyFeatureButton mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this._buttonBuyFeature = this.node.getComponent(Button);
		this.onTriggerDisableUserInteraction();
	}
```
