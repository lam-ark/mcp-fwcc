---
id: "cc_slot_mechanics:BuyFeatureButton:methods:inject"
title: "BuyFeatureButton.inject Method Implementation"
category: "cc_slot_mechanics"
tags: ["BuyFeatureButton", "buy_feature_button", "cc_slot_mechanics", "methods", "inject"]
---

# 📖 `BuyFeatureButton.inject()`

---

## 1. Method Signature

```typescript
inject(GameConfig) gameConfig: GameConfig = null; protected _buttonBuyFeature: cc.Button = null; onLoadExtend(): void
```

- **Scope**: `BuyFeatureButton`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
inject(GameConfig) gameConfig: GameConfig = null;
	protected _buttonBuyFeature: cc.Button = null;

	onLoadExtend(): void {
		this._buttonBuyFeature = this.node.getComponent(Button);
		this.onTriggerDisableUserInteraction();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
