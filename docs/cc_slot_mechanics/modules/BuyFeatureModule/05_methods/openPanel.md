---
id: "cc_slot_mechanics:BuyFeatureModule:methods:openPanel"
title: "BuyFeatureModule.openPanel Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "openPanel"]
---

# 📖 `BuyFeatureModule.openPanel()`

---

## 1. Method Signature & Overview

```typescript
openPanel(): void
```

- **Primary Role**: Implements openPanel within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
openPanel(): void {
		this.gameLogic.emit(GameLogicUIEvents.OPEN_BUY_FEATURE_PANEL);
	}
```
