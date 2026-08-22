# FreeOptionDirectorModule

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/FreeOption/FreeOptionDirectorModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`SlotCustomFreeGameOption`**
- **`export`**
- **`FreeOptionDirectorModule`** extends `GameModeDirectorModule`

## CC Properties
- `optionNode`
- `optionId`
- `options`
- `countDownText`

## Key Methods
- `init(): void`
- `localizeText(): void`
- `onResumeGameMode(): Promise<void>`
- `enter(): void`
- `transitionGameMode(): Promise<void>`
- `onEnableOptions(): void`
- `optionClick(): void`
- `updateCountdownText(): void`
- `startCountDown(): void`
- `stopCountDown(): void`
- `_runAutoTrigger(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Button, tween } = cc;
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
import { GameModeDirectorModule } from "../GameModeDirectorModule";
const { ccclass, property } = _decorator;

@ccclass("SlotCustomFreeGameOption")
export class SlotCustomFreeGameOption {
	@property({ type: cc.Node })
	optionNode: cc.Node = null;
	@property()
	optionId: string = '';
}

@ccclass
export class FreeOptionDirectorModule extends GameModeDirectorModule {
	@property({ type: SlotCustomFreeGameOption })
	options: SlotCustomFreeGameOption[] = [];
	@property({ type: cc.Label })
	countDownText: cc.Label = null;
	@property
	countdownTime: number = 15;

	autoSelectText: string = "";
	optionIds: number[] = [];
	defaultCountdownTime: number = 15;
	protected _repeatCountDown: any = null;

	init(): void {
		super.init();
		this.localizeText();
		this.defaultCountdownTime = this.countdownTime;
	}

	localizeText(): void {
		this.autoSelectText = this.gameLogic.getGameText("FREE_OPTION_GAME_REMIND");
	}

	onResumeGameMode(): Promise<void> {
		return Promise.resolve();
	}

	enter(): void {
		this.countdownTime = this.defaultCountdownTime;
		this.updateCountdownText(this.countdownTime);
		this.startCountDown();

		this.onEnableOptions(true);
	}

	transitionGameMode(data): Promise<void> {
		return Promise.resolve();
	}

	onEnableOptions(isEnable = false): void {
		this.options.forEach((option, index) => {
			option.optionNode.attr({ optionId: option.optionId});
			option.optionNode.getComponent(Button).interactable = isEnable;
		});
	}

	optionClick(ev: any, optionId: number): void {
		const selectedOption = Number(optionId ? optionId : ev.target.optionId);
		this.options.forEach((option) => {
			option.optionNode.getComponent(Button).interactable = false;
			// item.opacity = selectedOption === item.optionId ? 255 : 150;
		});
		this.gameLogic.emit(GameLogicUIEvents.SEND_FREE_OPTION_REQUEST, selectedOption);
		this.stopCountDown();
	}

	updateCountdownText(timerCount: number): void {
		if (timerCount > 0) {
			this.countDownText.string = `${this.autoSelectText} ${timerCount}s`;
		} else {
			this.countDownText.string = "0s";
		}
	}

	startCountDown(): void {
		if (!this.countDownText) {
			return;
		}
		this.stopCountDown();
		this._repeatCountDown = tween(this)
			.delay(1)
			.call(() => {
				this.countdownTime--;
				this.updateCountdownText(this.countdownTime);
				if (this.countdownTime <= 0) {
					this._repeatCountDown.stop();
					this._repeatCountDown = null;
					this._runAutoTrigger();
				}
			})
			.union()
			.repeatForever()
			.start();
	}

	stopCountDown(): void {
		if (this._repeatCountDown && this.countdownTime > 0) {
			this._repeatCountDown.stop();
			this._repeatCountDown = null;
		}
	}

	_runAutoTrigger(): void {
		this.stopCountDown();
		let randomIndex = Math.floor(Math.random() * this.options.length);
		let randomOption = this.options[randomIndex];
		this.optionClick(null, Number(randomOption.optionId));
	}

	onDestroy(): void {
		if (this._repeatCountDown) {
			this._repeatCountDown.stop();
			this._repeatCountDown = null;
		}
	}
}

```
