# BetModule

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/Bet/BetModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetModule`** extends `SlotBaseModule`

## CC Properties
- `betDenomLabel`
- `totalBetLabel`
- `totalLineLabel`
- `totalCreditLabel`
- `increaseBet`
- `decreaseBet`

## Key Methods
- `start(): void`
- `setupObserver(): void`
- `onUpdateBetDenom(): void`
- `onUpdateTotalBet(): void`
- `onUpdateBetLineNumber(): void`
- `onUpdateTotalCredit(): void`
- `getCreditText(): string`
- `disableBet(): void`
- `onMinBetEnable(): void`
- `onMaxBetEnable(): void`
- `onIncreaseBet(): void`
- `onDecreaseBet(): void`
- `playSfxIncreaseBet(): void`
- `playSfxDecreaseBet(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
import { SlotBaseModule } from "../../Core/SlotBaseModule";

const { ccclass, property } = _decorator;

@ccclass
export class BetModule extends SlotBaseModule {
	@property(cc.Label)
	betDenomLabel: cc.Label = null!;

	@property(cc.Label)
	totalBetLabel: cc.Label = null!;

	@property(cc.Label)
	totalLineLabel: cc.Label = null!;

	@property(cc.Label)
	totalCreditLabel: cc.Label = null!;

	@property(cc.Button)
	increaseBet: cc.Button = null!;

	@property(cc.Button)
	decreaseBet: cc.Button = null!;

	@property sfxIncreaseBetId: string = "BTN_BET_INCREASE";
	@property sfxDecreaseBetId: string = "BTN_BET_DECREASE";

	betModel: eno.BetData = null;

	start(): void {
		this.disableBet();
		this.betModel = this.gameLogic.getDataModel().BetData;
		this.setupObserver();
	}

	setupObserver(): void {
		this.observer.watch(this.betModel, "betDenom", this.onUpdateBetDenom.bind(this), this);
		this.observer.watch(this.betModel, "totalBet", this.onUpdateTotalBet.bind(this), this);
		this.observer.watch(this.betModel, "betLineNumber", this.onUpdateBetLineNumber.bind(this), this);
		this.observer.watch(this.betModel, "totalCredit", this.onUpdateTotalCredit.bind(this), this);
		this.observer.watch(this.betModel, "minBetEnable", this.onMinBetEnable.bind(this), this, { canTriggerSameValue: true });
		this.observer.watch(this.betModel, "maxBetEnable", this.onMaxBetEnable.bind(this), this, { canTriggerSameValue: true });
	}

	onUpdateBetDenom(betDenom: number): void {
		this.betDenomLabel.node.emit("ON_UPDATE_VALUE", betDenom);
	}

	onUpdateTotalBet(totalBet: number): void {
		this.totalBetLabel.node.emit("ON_UPDATE_VALUE", totalBet);
	}

	onUpdateBetLineNumber(betLineNumber: number): void {
		if (this.totalLineLabel && betLineNumber) {
			this.totalLineLabel.string = `${betLineNumber}`;
		}
	}

	onUpdateTotalCredit(totalCredit: number): void {
		if (this.totalCreditLabel && totalCredit) {
			this.totalCreditLabel.string = `${totalCredit}` + this.getCreditText();
		}
	}

	getCreditText(): string {
		return ` ${this.gameLogic.getGameText("CREDITS")}`;
	}

	disableBet(): void {
		this.decreaseBet.interactable = false;
		this.increaseBet.interactable = false;
	}

	onMinBetEnable(minBetEnable: boolean): void {
		this.decreaseBet.interactable = minBetEnable;
	}

	onMaxBetEnable(maxBetEnable: boolean): void {
		this.increaseBet.interactable = maxBetEnable;
	}

	onIncreaseBet(): void {
		this.playSfxIncreaseBet();
		this.gameLogic.emit(GameLogicUIEvents.INCREASE_BET);
	}

	onDecreaseBet(): void {
		this.playSfxDecreaseBet();
		this.gameLogic.emit(GameLogicUIEvents.DECREASE_BET);
	}

	playSfxIncreaseBet(): void {
		if (!this.soundPlayer) {
			return;
		}
		if (this.sfxIncreaseBetId) {
			this.soundPlayer.playSfx(this.sfxIncreaseBetId);
		} else {
			this.soundPlayer.playSFXClick();
		}
	}

	playSfxDecreaseBet(): void {
		if (!this.soundPlayer) {
			return;
		}
		if (this.sfxDecreaseBetId) {
			this.soundPlayer.playSfx(this.sfxDecreaseBetId);
		} else {
			this.soundPlayer.playSFXClick();
		}
	}

	onDestroy(): void {
		this.observer.releaseAll(this.betModel, this);
	}
}

```
