# InstantCashModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/InstantCash/scripts/InstantCashModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`InstantCashModule`** extends `SlotBaseModule`

## CC Properties
- `lbInstantCash`

## Key Methods
- `onLoadExtend(): void`
- `showInstantCash(): void`
- `resetInstantCash(): void`

## Source Implementation
```typescript
const { _decorator} = cc;
import { InstantCashData } from './InstantCashData';
import { SlotBaseModule } from '../../../cc-slot-module/SlotModuleExport';
import { HelpDocuments } from '../../../cc-slot-module/Components/Common/HelpDocuments';
const { ccclass, property, help } = _decorator;

@ccclass
@help(HelpDocuments.INSTANT_CASH_MODULE)
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

	showInstantCash(): void {
		const multiplier = this._instantCashData.getInstantCashMultiplier();
		const totalBet = this._betData ? this._betData.totalBet : 0;

		this.lbInstantCash.string = `${multiplier * totalBet}`;
	}

	resetInstantCash(): void {
		this.lbInstantCash.string = "";
	}
}
```
