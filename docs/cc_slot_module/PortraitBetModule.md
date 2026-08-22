# PortraitBetModule

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/PortraitBet/PortraitBetModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`PortraitBetModule`** extends `BetModule`

## CC Properties
- `minBetBtn`
- `maxBetBtn`

## Key Methods
- `setupObserver(): void`
- `onEnableBetChange(): void`
- `onMinBetEnable(): void`
- `onMaxBetEnable(): void`
- `onMaxBetClick(): void`
- `onMinBetClick(): void`
- `disableBet(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameUIEvents } from "../../Core/GameUIEvents";
import { BetModule } from "../../GUI/Bet/BetModule";
const { ccclass, property } = _decorator;

@ccclass
export class PortraitBetModule extends BetModule {
	@property(cc.Button)
	minBetBtn: cc.Button = null!;
	@property(cc.Button)
	maxBetBtn: cc.Button = null!;

	setupObserver(): void {
		super.setupObserver();
		this.observer.watch(this.betModel, "enableBetChange", this.onEnableBetChange.bind(this), this);
		this.minBetBtn.node.active = false;
		this.maxBetBtn.node.active = false;
	}

	onEnableBetChange(enable: boolean): void {
		this.maxBetBtn.interactable = enable;
		this.minBetBtn.interactable = enable;
	}

	onMinBetEnable(minBetEnable: boolean): void {
		super.onMinBetEnable(minBetEnable);
		this.minBetBtn.node.active = !minBetEnable;
	}

	onMaxBetEnable(maxBetEnable: boolean): void {
		super.onMaxBetEnable(maxBetEnable);
		this.maxBetBtn.node.active = !maxBetEnable;
	}

	onMaxBetClick(): void {
		this.eventManager.emit(GameUIEvents.UI_TOAST.HIT_MAX_BET);
	}

	onMinBetClick(): void {
		this.eventManager.emit(GameUIEvents.UI_TOAST.HIT_MIN_BET);
	}

	disableBet(): void {
		super.disableBet();
		this.minBetBtn.interactable = false;
		this.maxBetBtn.interactable = false;
	}

	onDestroy(): void {
		this.observer.releaseAll(this.betModel, this);
	}
}

```
