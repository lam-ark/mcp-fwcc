---
id: "cc_slot_mechanics:BuyFeatureModule:methods:onBtnDecreaseBet"
title: "BuyFeatureModule.onBtnDecreaseBet Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "onBtnDecreaseBet"]
---

# 📖 `BuyFeatureModule.onBtnDecreaseBet()`

---

## 1. Method Signature & Overview

```typescript
onBtnDecreaseBet(): void
```

- **Primary Role**: Implements onBtnDecreaseBet within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onBtnDecreaseBet(): void {
		this.soundPlayer && this.soundPlayer.playSfx(this.sfxDecreaseBetId);
		this.gameLogic.emit(GameLogicUIEvents.DECREASE_BET);
	}
```
