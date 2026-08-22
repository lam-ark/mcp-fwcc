# MegawayModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/Megaway/scripts/MegawayModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`MegawayModule`** extends `SlotBaseModule`

## CC Properties
- `lbMegaway`

## Key Methods
- `onLoadExtend(): void`
- `onReelStopped(): void`
- `updateTotalMegaway(): void`
- `updateMegawayString(): void`
- `formatCoin(): this.defaultString`
- `reset(): void`
- `resetAllEffectAndTasks(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { HelpDocuments } from '../../../cc-slot-module/Components/Common/HelpDocuments';
import { SlotBaseModule } from '../../../cc-slot-module/SlotModuleExport';
import { MegawayData } from './MegawayData';
const { inject, MoneyFormatter } = eno;
const { ccclass, property, help } = _decorator;
	
@ccclass
@help(HelpDocuments.MEGAWAY_MODULE)
export class MegawayModule extends SlotBaseModule {
	@inject(MoneyFormatter) moneyFormatter: eno.MoneyFormatter;
	@property(cc.Label) lbMegaway: cc.Label = null;
	@property defaultString: string = "...";

	_data: MegawayData;
	onLoadExtend(): void {
		this.moduleEvent.on('UPDATE_MEGAWAY', this.updateTotalMegaway, this);
		this.moduleEvent.on('REEL_STOPPED', this.onReelStopped, this);
		this.moduleEvent.on('RESET_MEGAWAY', this.reset, this);
		this._data = this.node.getComponent(MegawayData);
	}

	onReelStopped(col: number): void {
		if(this._data.minCol > col) {
			return;
		}
		
		const ways = this._data.getTotalWayCol(col);
		this.updateMegawayString(ways);
	}

	updateTotalMegaway(totalWay: number): void {
		const ways = totalWay || this._data.getTotalWay();
		this.updateMegawayString(ways);
	}

	updateMegawayString(totalWay: number): void {
		this.lbMegaway.string = totalWay ? this.moneyFormatter.formatCoin(totalWay) : this.defaultString;
	}

	reset(): void {
		this.lbMegaway.string = this.defaultString;
	}

	resetAllEffectAndTasks(): void {
		// to do
	}
}
```
