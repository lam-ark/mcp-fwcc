# DenomLabel

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/Bet/DenomLabel.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`DenomLabel`** extends `BetLabelModule`

## Key Methods
- `onUpdateValue(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BetLabelModule } from './BetLabelModule';
const { ccclass, property } = _decorator;

@ccclass
export class DenomLabel extends BetLabelModule {
	@property
	prefix: string = '';

	onUpdateValue(value: number): void {
		if (this.moneyFormatter) {
			const money = `${this.prefix}${this.moneyFormatter.formatMoney(value)}`;
			this.label.string = money;
		}
	}
}


```
