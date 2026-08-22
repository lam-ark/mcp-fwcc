# MultiplierModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/Multiplier/scripts/MultiplierModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`MultiplierModule`** extends `SlotBaseModule`

## CC Properties
- `lbMultiplier`

## Key Methods
- `onLoadExtend(): void`
- `registerEvents(): void`
- `showMultiplier(): void`
- `resetMultiplier(): void`
- `resetAllEffectAndTasks(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { MultiplierData } from './MultiplierData';
import { SlotBaseModule } from '../../../cc-slot-module/SlotModuleExport';
import { HelpDocuments } from '../../../cc-slot-module/Components/Common/HelpDocuments';
const { ccclass, property, help } = _decorator;

@ccclass
@help(HelpDocuments.MULTIPLIER_MODULE)
export class MultiplierModule extends SlotBaseModule {
	@property(cc.Label) lbMultiplier: cc.Label = null;
	@property
	prefix: string = "x";
	@property
	defaultMultiplier: number = 1;

	_multiplierData: MultiplierData;

	onLoadExtend(): void {
		this._multiplierData = this.getComponent(MultiplierData);
	}

	protected registerEvents(): void {
		this.moduleEvent.on('SHOW_MULTIPLIER', this.showMultiplier, this);
		this.moduleEvent.on('RESET_MULTIPLIER', this.resetMultiplier, this);
	}

	showMultiplier(): void {
		const multiplier = this._multiplierData.getMultiplier();
		if (multiplier > this.defaultMultiplier) {
			this.lbMultiplier.string = `${this.prefix}${multiplier}`;
		}
	}

	resetMultiplier(): void {
		this.lbMultiplier.string = "";
	}

	resetAllEffectAndTasks(): void {
		this.resetMultiplier();
	}
}


```
