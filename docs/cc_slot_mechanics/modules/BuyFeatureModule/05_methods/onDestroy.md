---
id: "cc_slot_mechanics:BuyFeatureModule:methods:onDestroy"
title: "BuyFeatureModule.onDestroy Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "onDestroy"]
---

# 📖 `BuyFeatureModule.onDestroy()`

---

## 1. Method Signature & Overview

```typescript
onDestroy(): void
```

- **Primary Role**: Implements onDestroy within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected onDestroy(): void {
		this.observer.releaseAll(this.uiManagerData, this);
		this.observer.releaseAll(this._betData, this);
	}
```
