# WalletLabel

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/Wallet/WalletLabel.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`WalletLabel`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `updateDefaultWallet(): void`
- `onUpdateValue(): void`
- `pauseWallet(): void`
- `resumeWallet(): void`

## Source Implementation
```typescript
const { _decorator, Label } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { SlotGameSettings } from "../../Core/SlotGameSettings";
const { ccclass } = _decorator;
const { inject, MoneyTween, MoneyFormatter } = eno;

@ccclass
export class WalletLabel extends SlotBaseModule {
	lastValue: number = 0;
	isPaused: boolean = false;
	label: cc.Label = null;
	@inject(MoneyTween) moneyTween: eno.MoneyTween;
	@inject(MoneyFormatter) moneyFormatter: eno.MoneyFormatter;
	@inject(SlotGameSettings) gameSettings: SlotGameSettings;

	onLoadExtend(): void {
		this.label = this.node.getComponent(Label);

		this.node.on("ON_UPDATE_VALUE", this.onUpdateValue, this);
		this.node.on("PAUSE_WALLET", this.pauseWallet, this);
		this.node.on("RESUME_WALLET", this.resumeWallet, this);
	}

	updateDefaultWallet(): void {
		this.label.string = this.moneyFormatter.formatWallet(0);
		this.lastValue = 0;
	}

	onUpdateValue(value: number): void {
		if (!this.gameSettings.isJoinGameSuccess) {
			return;
		}
		
		this.lastValue = value;

		if (this.isPaused) {
			return;
		}

		if (value === 0) {
			this.updateDefaultWallet();
			return;
		}

		this.moneyTween.runWallet(this.node, 0.3, value, { acceptRunDown: true });
	}

	pauseWallet(): void {
		this.isPaused = true;
	}

	resumeWallet(): void {
		this.isPaused = false;
		this.onUpdateValue(this.lastValue);
	}
}

```
