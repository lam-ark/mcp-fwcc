---
id: "cc_slot_mechanics:InstantCashModule:methods:help"
title: "InstantCashModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `InstantCashModule.help()`

---

## 1. Method Signature

```typescript
help(HelpDocuments.INSTANT_CASH_MODULE) export class InstantCashModule extends SlotBaseModule { @property(cc.Label) lbInstantCash: cc.Label = null; _instantCashData: InstantCashData; _betData: eno.BetData; onLoadExtend(): void
```

- **Scope**: `InstantCashModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.INSTANT_CASH_MODULE)
export class InstantCashModule extends SlotBaseModule {
	@property(cc.Label) lbInstantCash: cc.Label = null;
	_instantCashData: InstantCashData;
	_betData: eno.BetData;

	onLoadExtend(): void {
		this._instantCashData = this.getComponent(InstantCashData);
		this._betData = this.gameLogic && this.gameLogic.getDataModel() && this.gameLogic.getDataModel().BetData;
		this.moduleEvent.on('SHOW_INSTANT_CASH', this.showInstantCash, this);
		this.moduleEvent.on('RESET_INSTANT_CASH', this.resetInstantCash, this);
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
