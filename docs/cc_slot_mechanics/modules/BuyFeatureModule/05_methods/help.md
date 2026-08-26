---
id: "cc_slot_mechanics:BuyFeatureModule:methods:help"
title: "BuyFeatureModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `BuyFeatureModule.help()`

---

## 1. Method Signature

```typescript
help(HelpDocuments.BUY_FEATURE_MODULE) export class BuyFeatureModule extends SlotBaseModule { @property(cc.Label) lbContent: cc.Label = null; @property(cc.Label) lbBetValue: cc.Label = null; @property(cc.Label) lbTotalBet: cc.Label = null; @property(cc.Button) btnIncreaseBet: cc.Button = null; @property(cc.Button) btnDecreaseBet: cc.Button = null; @property(cc.Button) btnBuyFeature: cc.Button = null; @property sfxIncreaseBetId: string = "BTN_BET_INCREASE"; @property sfxDecreaseBetId: string = "BTN_BET_DECREASE"; uiManagerData: any = null; _betData: any = null; _buyFeatureConfig: BuyFeatureConfig = null; onLoadExtend(): void
```

- **Scope**: `BuyFeatureModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.BUY_FEATURE_MODULE)
export class BuyFeatureModule extends SlotBaseModule {
	@property(cc.Label) lbContent: cc.Label = null;
	@property(cc.Label) lbBetValue: cc.Label = null;
	@property(cc.Label) lbTotalBet: cc.Label = null;

	@property(cc.Button) btnIncreaseBet: cc.Button = null;
	@property(cc.Button) btnDecreaseBet: cc.Button = null;
	@property(cc.Button) btnBuyFeature: cc.Button = null;

	@property sfxIncreaseBetId: string = "BTN_BET_INCREASE";
	@property sfxDecreaseBetId: string = "BTN_BET_DECREASE";

	uiManagerData: any = null;
	_betData: any = null;
	_buyFeatureConfig: BuyFeatureConfig = null;

	onLoadExtend(): void {
		this._buyFeatureConfig = this.getComponent(BuyFeatureConfig);
		this.lbContent.string = this._buyFeatureConfig.CONTEXT_TEXT
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
