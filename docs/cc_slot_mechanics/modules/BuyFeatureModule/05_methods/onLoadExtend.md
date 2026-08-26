---
id: "cc_slot_mechanics:BuyFeatureModule:methods:onLoadExtend"
title: "BuyFeatureModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `BuyFeatureModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this._buyFeatureConfig = this.getComponent(BuyFeatureConfig);
		this.lbContent.string = this._buyFeatureConfig.CONTEXT_TEXT
	}
```
