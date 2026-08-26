---
id: "cc_slot_mechanics:BuyFeatureModule:methods:closePanel"
title: "BuyFeatureModule.closePanel Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "closePanel"]
---

# 📖 `BuyFeatureModule.closePanel()`

---

## 1. Method Signature & Overview

```typescript
closePanel(): void
```

- **Primary Role**: Implements closePanel within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
closePanel(): void {
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_BUY_FEATURE_PANEL);
	}
```
