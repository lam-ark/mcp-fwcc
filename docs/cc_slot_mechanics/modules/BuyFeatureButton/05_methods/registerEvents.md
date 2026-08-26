---
id: "cc_slot_mechanics:BuyFeatureButton:methods:registerEvents"
title: "BuyFeatureButton.registerEvents Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureButton", "buy_feature_button", "cc_slot_mechanics", "methods", "registerEvents"]
---

# 📖 `BuyFeatureButton.registerEvents()`

---

## 1. Method Signature & Overview

```typescript
registerEvents(): void
```

- **Primary Role**: Implements registerEvents within the BuyFeatureButton mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected registerEvents(): void {
		this.gameLogic.on('ON_GAME_READY', this.onTriggerEnableUserInteraction, this);
		this.gameLogic.on('TRIGGER_DISABLE_USER_INTERACTION', this.onTriggerDisableUserInteraction, this);
		this.gameLogic.on('TRIGGER_ENABLE_USER_INTERACTION', this.onTriggerEnableUserInteraction, this);
	}
```
