---
id: "cc_slot_mechanics:BuyFeatureModule:methods:watch"
title: "BuyFeatureModule.watch Method Implementation"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "watch"]
---

# 📖 `BuyFeatureModule.watch()`

---

## 1. Method Signature

```typescript
watch(this._betData, "totalBet", this.onUpdateTotalBet.bind(this), this, { fireImmediately: true }); this.observer.watch(this._betData, "minBetEnable", this.onMinBetEnable.bind(this), this, { canTriggerSameValue: true }); this.observer.watch(this._betData, "maxBetEnable", this.onMaxBetEnable.bind(this), this, { canTriggerSameValue: true }); } onUpdateTotalBet(betValue: number): void
```

- **Scope**: `BuyFeatureModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
watch(this._betData, "totalBet", this.onUpdateTotalBet.bind(this), this, { fireImmediately: true });
		this.observer.watch(this._betData, "minBetEnable", this.onMinBetEnable.bind(this), this, { canTriggerSameValue: true });
		this.observer.watch(this._betData, "maxBetEnable", this.onMaxBetEnable.bind(this), this, { canTriggerSameValue: true });
	}

	onUpdateTotalBet(betValue: number): void {
		this.lbBetValue.node.emit("ON_UPDATE_VALUE", betValue);
		this.lbTotalBet.node.emit("ON_UPDATE_VALUE", this.getTotalExtraBet());
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
