# BetLabelModule

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/Bet/BetLabelModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetLabelModule`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `onUpdateValue(): void`
- `formatBet(): this.moneyFormatter.formatMoney(value)`

## Source Implementation
```typescript
const { _decorator, Label } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
const { ccclass, property } = _decorator;
const { inject, MoneyFormatter } = eno;

@ccclass
export class BetLabelModule extends SlotBaseModule {
	@property useBetFormat: boolean = false;
	@inject(MoneyFormatter) moneyFormatter: eno.MoneyFormatter;
	label: cc.Label = null;
	onLoadExtend(): void {
		this.label = this.node.getComponent(Label);
		this.node.on("ON_UPDATE_VALUE", this.onUpdateValue, this);
	}

	onUpdateValue(value: number): void {
		if (this.moneyFormatter) {
			this.label.string = this.useBetFormat ? this.moneyFormatter.formatBet(value) : this.moneyFormatter.formatMoney(value);
		}
	}
}

```
