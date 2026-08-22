# ExtraBetModule

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/Bet/ExtraBetModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`ExtraBetModule`** extends `SlotBaseModule`

## CC Properties
- `extraBetLabel`
- `increaseExtraBet`
- `decreaseExtraBet`

## Key Methods
- `start(): void`
- `setupObserver(): void`
- `disableExtraBet(): void`
- `onMinExtraBetEnable(): void`
- `onMaxExtraBetEnable(): void`
- `onUpdateTotalBet(): void`
- `onIncreaseExtraBet(): void`
- `onDecreaseExtraBet(): void`
- `playSfxIncreaseExtraBet(): void`
- `playSfxDecreaseExtraBet(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
import { SlotBaseModule } from "../../Core/SlotBaseModule";
const { ccclass, property } = _decorator;

@ccclass
export class ExtraBetModule extends SlotBaseModule {
	@property(cc.Label)
	extraBetLabel: cc.Label = null!;

	@property(cc.Button)
	increaseExtraBet: cc.Button = null!;

	@property(cc.Button)
	decreaseExtraBet: cc.Button = null!;

	@property
	sfxIncreaseExtraBetId: string = "";
	@property
	sfxDecreaseExtraBetId: string = "";

	betModel = null;

	start(): void {
		this.disableExtraBet();
		this.betModel = this.gameLogic.getDataModel().BetData;
		this.setupObserver();
	}

	setupObserver(): void {
		this.observer.watch(this.betModel, "minExtraBetEnable", this.onMinExtraBetEnable.bind(this), this);
		this.observer.watch(this.betModel, "maxExtraBetEnable", this.onMaxExtraBetEnable.bind(this), this);
		this.observer.watch(this.betModel, "totalBet", this.onUpdateTotalBet.bind(this), this);
	}

	disableExtraBet(): void {
		this.increaseExtraBet.interactable = false;
		this.decreaseExtraBet.interactable = false;
	}

	onMinExtraBetEnable(minExtraBetEnable: boolean): void {
		this.decreaseExtraBet.interactable = minExtraBetEnable;
	}

	onMaxExtraBetEnable(maxExtraBetEnable: boolean): void {
		this.increaseExtraBet.interactable = maxExtraBetEnable;
	}

	onUpdateTotalBet(): void {
		this.extraBetLabel.string = this.betModel.extraBetValue.toString();
	}

	onIncreaseExtraBet(): void {
		this.playSfxIncreaseExtraBet();
		this.gameLogic.emit(GameLogicUIEvents.INCREASE_EXTRA_BET);
	}

	onDecreaseExtraBet(): void {
		this.playSfxDecreaseExtraBet();
		this.gameLogic.emit(GameLogicUIEvents.DECREASE_EXTRA_BET);
	}

	playSfxIncreaseExtraBet(): void {
		if (!this.soundPlayer) {
			return;
		}
		if (this.sfxIncreaseExtraBetId) {
			this.soundPlayer.playSfx(this.sfxIncreaseExtraBetId);
		} else {
			this.soundPlayer.playSFXClick();
		}
	}

	playSfxDecreaseExtraBet(): void {
		if (!this.soundPlayer) {
			return;
		}
		if (this.sfxDecreaseExtraBetId) {
			this.soundPlayer.playSfx(this.sfxDecreaseExtraBetId);
		} else {
			this.soundPlayer.playSFXClick();
		}
	}

	onDestroy(): void {
		this.observer.releaseAll(this.betModel, this);
	}
}

```
