# WinAmountModule

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/WinAmount/WinAmountModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`WinAmountModule`** extends `SlotBaseModule`

## CC Properties
- `winFrameEffect`
- `labelWinAmount`

## Key Methods
- `currentValue(): number`
- `_updateLabelWinAmount(): void`
- `formatMoney(): ""`
- `onLoadExtend(): void`
- `syncWinAmount(): void`
- `fastUpdateWinAmount(): void`
- `clearWinAmount(): void`
- `fadeOutNumber(): void`
- `updateWinAmount(): Promise<void>`
- `playWinEffect(): void`
- `stopWinEffect(): void`
- `_tweenWinAmount(): void`
- `_resetLabel(): void`
- `resetCallBack(): void`
- `stopTweenFade(): void`

## Source Implementation
```typescript
const { _decorator, log, warn } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { GameUIEvents } from "../../Core/GameUIEvents";
import { GameDataStore } from "../../Core/GameDataStore";
const { ccclass, property } = _decorator;
const { MoneyFormatter, MoneyTween, inject, setOpacity, fadeOut } = eno;

@ccclass
export class WinAmountModule extends SlotBaseModule {
	_currentValue: number = 0;
	_winValue: number;
	_callBackOnComplete: Function;
	_tweenValue: any;
	_tweenFade: any;

	@property(sp.Skeleton) winFrameEffect: sp.Skeleton = null;
	@property(cc.Label) labelWinAmount: cc.Label = null;
	@inject(MoneyFormatter) moneyFormatter;
	@inject(MoneyTween) moneyTween;
	@inject(GameDataStore) dataStore: GameDataStore;

	get currentValue(): number {
		return this._currentValue;
	}

	set currentValue(value: number) {
		if (this._currentValue !== value) {
			this._currentValue = value;
			this._updateLabelWinAmount();
		}
	}

	_updateLabelWinAmount(): void {
		this.labelWinAmount.string = this.currentValue && this.currentValue > 0 ? this.moneyFormatter.formatMoney(this.currentValue) : "";
	}

	onLoadExtend(): void {
		this.eventManager.on(GameUIEvents.WIN_AMOUNT.UPDATE_WIN_AMOUNT, this.updateWinAmount, this);
		this.eventManager.on(GameUIEvents.WIN_AMOUNT.FAST_UPDATE_WIN_AMOUNT, this.fastUpdateWinAmount, this);
		this.eventManager.on(GameUIEvents.WIN_AMOUNT.CLEAR_WIN_AMOUNT, this.clearWinAmount, this);
		this.eventManager.on(GameUIEvents.WIN_AMOUNT.FADE_OUT_NUMBER, this.fadeOutNumber, this);
		this.eventManager.on(GameUIEvents.WIN_AMOUNT.SYNC_WIN_AMOUNT, this.syncWinAmount, this);
		this.labelWinAmount.string = "";
	}

	syncWinAmount(value): void {
		this._tweenValue && this._tweenValue.stop();
		this._tweenValue = null;
		this._winValue = value || this.dataStore.getWinAmountPS();
		this.currentValue = this._winValue;
		this._callBackOnComplete = null;
		this.stopWinEffect();
		log("sync last win amount");
	}

	fastUpdateWinAmount({ winAmount, time }): void {
		if (!winAmount) {
			winAmount = this._winValue;
		}
		if (winAmount < this._currentValue || winAmount < this._winValue) {
			warn("Logic fail: Could not speed up to the smaller value", { current: this._currentValue, endValue: this._winValue, fastUpdateValue: winAmount });
			return;
		}
		this._tweenWinAmount({ winAmount, time });
	}

	clearWinAmount(): void {
		this._resetLabel();
		this.currentValue = 0;
		this._winValue = 0;
		this.stopWinEffect();
	}

	fadeOutNumber(time: number = 0.5): void {
		if (!this.labelWinAmount || this._winValue <= 0) {
			return;
		}
		(this.node as any).isFading = true;
		if (this._tweenValue) {
			this.currentValue = this._winValue;
		}
		this.stopTweenValue();
		this.resetCallBack();
		this._tweenFade = fadeOut(this.labelWinAmount.node, time, {
			onComplete: () => {
				(this.node as any).isFading = false;
				this.clearWinAmount();
			},
		});
	}

	updateWinAmount({ winAmount, time, winLevel }): Promise<void> {
		return new Promise((resolve) => {
			this.playWinEffect(winLevel);
			this._callBackOnComplete = resolve;

			if (this._tweenFade) {
				this._tweenFade.stop();
			}
			if (winAmount < this._currentValue || winAmount < this._winValue) {
				warn("Logic fail somewhere, script clear win amount have not ran yet", { current: this._currentValue, endValue: this._winValue, fastUpdateValue: winAmount });
				this.clearWinAmount();
			}
			this._winValue = winAmount;
			time = this._currentValue === winAmount ? 0 : time;
			this._tweenWinAmount({ winAmount, time });
		});
	}

	playWinEffect(_winLevel: number): void {
		// override code here
	}

	stopWinEffect(): void {
		// override code here
	}

	_tweenWinAmount({ winAmount = 0, time = 0 }): void {
		this._resetLabel();
		if (time === 0) {
			this.currentValue = winAmount;
			this.resetCallBack();
			log("show win Amount instantly", { winAmount, time });
			return;
		}
		this._tweenValue = this.moneyTween.runNumber(this.labelWinAmount.node, time, winAmount, {
			onComplete: () => {
				this.currentValue = winAmount;
				this.resetCallBack();
				this._tweenValue = null;
			}
		});
	}

	_resetLabel(): void {
		this.stopTweenFade();
		this.stopTweenValue();
		setOpacity(this.labelWinAmount.node, 255);
		(this.node as any).isFading = false;
	}

	resetCallBack(): void {
		this._callBackOnComplete && this._callBackOnComplete();
		this._callBackOnComplete = null;
	}

	stopTweenFade(): void {
		this._tweenFade && this._tweenFade.stop();
		this._tweenFade = null;
	}

	stopTweenValue(): void {
		this._tweenValue && this._tweenValue.stop();
		this._tweenValue = null;
	}

	protected resetAllEffectAndTasks(): void {
        this.clearWinAmount();
    }

	onDestroy(): void {
		this.stopTweenFade();
		this.stopTweenValue();
	}
}

```
