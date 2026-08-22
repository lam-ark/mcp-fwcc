# BetSelectionItem

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/BetSelectionPanel/BetSelectionItem.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetSelectionItem`** extends `SlotBaseModule`

## CC Properties
- `public`

## Key Methods
- `init(): void`
- `updateDefaultValue(): void`
- `updateValue(): void`
- `onSlected(): void`
- `setHighlight(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../../Core/SlotBaseModule';
const { ccclass, property } = _decorator;
const { inject, MoneyFormatter } = eno;

@ccclass
export class BetSelectionItem extends SlotBaseModule {
	@property(cc.Label)
	public betValueLabel: cc.Label = null;
	@inject(MoneyFormatter) moneyFormatter: eno.MoneyFormatter;

	selectOptionCB: Function = () => {};
	betValue: number = 0;
	betId: string = "1";
	isHighlight: boolean = false;
    
	init(betValue: number, betId: string, selectOptionCB): void {
		this.betValue = betValue;
		this.betId = betId;
		this.selectOptionCB = selectOptionCB;
		this.updateValue(betValue);
	}

	updateDefaultValue(betValue: string): void {
		this.betValueLabel.string = `${betValue}`;
		this.setHighlight(false);
	}

	updateValue(betValue: number): void {
		this.betValueLabel.string = this.moneyFormatter.formatMoney(betValue);
	}

	onSlected(): void {
		if (this.isHighlight) {
			return;
		}
		this.selectOptionCB();
	}

	setHighlight(isHighlight: boolean): void {
		this.isHighlight = isHighlight;
	}
}


```
