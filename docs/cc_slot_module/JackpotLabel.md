# JackpotLabel

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/Jackpot/JackpotLabel.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`JackpotLabel`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `onUpdateValue(): void`

## Source Implementation
```typescript
const { _decorator, Label } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
const { ccclass, property  } = _decorator;
const { MoneyTween,inject } = eno;

@ccclass
export class JackpotLabel extends SlotBaseModule {
	_label: cc.Label = null;
	@inject(MoneyTween) moneyTween: eno.MoneyTween;

	onLoadExtend(): void {
		this._label = this.node.getComponent(Label);
		this.node.on("ON_UPDATE_VALUE", this.onUpdateValue, this);
	}

	onUpdateValue(value: number, time: number): void {
		const moneyTween = this.moneyTween;

		if (moneyTween) {
			moneyTween.runNumber(this.node, time, value, { acceptRunDown: true });
		}
	}
}

```
