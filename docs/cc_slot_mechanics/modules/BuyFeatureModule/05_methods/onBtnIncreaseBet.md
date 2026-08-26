---
id: "cc_slot_mechanics:BuyFeatureModule:methods:onBtnIncreaseBet"
title: "BuyFeatureModule.onBtnIncreaseBet Method"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "onBtnIncreaseBet"]
---

# 📖 `BuyFeatureModule.onBtnIncreaseBet()`

---

## 1. Method Signature & Overview

```typescript
onBtnIncreaseBet(): void
```

- **Primary Role**: Implements onBtnIncreaseBet within the BuyFeatureModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onBtnIncreaseBet(): void {
		this.soundPlayer && this.soundPlayer.playSfx(this.sfxIncreaseBetId);
		this.gameLogic.emit(GameLogicUIEvents.INCREASE_BET);
	}
```
