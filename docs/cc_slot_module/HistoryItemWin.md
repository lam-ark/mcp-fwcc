# HistoryItemWin

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/BetHistory/HistoryItemWin.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`HistoryItemWin`** extends `SlotBaseModule`

## CC Properties
- `winAmountLabel`

## Key Methods
- `onLoadExtend(): void`
- `updateResult(): void`
- `reset(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../../Core/SlotBaseModule';

const { ccclass, property } = _decorator;
const { inject, MoneyFormatter } = eno;

@ccclass
export class HistoryItemWin extends SlotBaseModule {
	@property(cc.Label)
	winAmountLabel: cc.Label = null;
	@inject(MoneyFormatter) moneyFormatter: eno.MoneyFormatter;

	onLoadExtend(): void {
		this.node.on("UPDATE_RESULT", this.updateResult, this);
		this.node.on("RESET", this.reset, this);
	}

	updateResult(winAmount: number): void {
		this.winAmountLabel.string = this.moneyFormatter.formatMoney(winAmount);
	}

	reset(): void {
		this.winAmountLabel.string = "0";
	}
}


```
