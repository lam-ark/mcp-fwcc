# BonusGameDirectorModule

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusGameDirectorModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BonusGameDirectorModule`** extends `GameModeDirectorModule`

## CC Properties
- `labelCountDown`

## Key Methods
- `onExtendedLoad(): void`
- `init(): void`
- `localizeText(): void`
- `initBonusGame(): void`
- `enter(): void`
- `startBonusGame(): void`
- `resetBonusGame(): void`
- `setAutoOpen(): void`
- `startCountDown(): void`
- `stopCountDown(): void`
- `resetCountDown(): void`
- `_runAutoTrigger(): void`
- `updateCountdownText(): void`
- `onClickItem(): void`
- `addItemToOpenBoxes(): void`

## Source Implementation
```typescript
const { _decorator, tween } = cc;
import { SlotCustomEvent } from "../../Components/Common/SlotCustomType";
import { CUTSCENE_TYPE_ENUM } from "../../Components/Common/SlotEnum";
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
import { GameUIEvents } from "../../Core/GameUIEvents";
import { GameModeDirectorModule } from "../GameModeDirectorModule";
const { ccclass, property } = _decorator;

@ccclass
export class BonusGameDirectorModule extends GameModeDirectorModule {
	@property({ type: cc.Label })
	labelCountDown: cc.Label = null;
	@property
	defaultCountDown: number = 15;

	bonusConfig = null;
	bonusData = null;

	autoSelectText: string = "";
	countdownTime: number = 0;
	openedBoxes: number[] = [];
	defaultTotalItem: number = 0;
	selectedBox: number = 0;
	isAutoOpen: boolean = false;
	isInit: boolean = false;
	protected _repeatCountDown: any = null;

	onExtendedLoad(): void {
		super.onExtendedLoad();
		this.node.on("CLICK_ITEM", this.onClickItem, this);
	}

	init(): void {
		super.init();
		this.localizeText();
	}

	localizeText(): void {
		this.autoSelectText = this.gameLogic.getGameText("BONUS_GAME_REMIND");
	}

	initBonusGame(): void {
		if (this.isInit) {
			return;
		}
		this.isInit = true;
		this.moduleEvent.emit("INIT_BONUS_GAME");
	}

	enter(): void {
		this.initBonusGame();
		this.startBonusGame();
	}

	startBonusGame(): void {
		this.resetBonusGame();
		this.blockBonusGame();
		this.playGameModeBGM();

		const { isResume } = this.dataStore.playSession;
		if (!isResume) {
			this.unblockBonusGame();
			this.startCountDown();
		}
		const { betId } = this.dataStore.playSession;
		this.moduleEvent.emit("START_BONUS_GAME", betId);
	}

	resetBonusGame(): void {
		this.setAutoOpen(false);
		this.countdownTime = this.defaultCountDown;
		this.updateCountdownText(this.countdownTime);
		this.openedBoxes = [];
	}

	setAutoOpen(isAutoOpen: boolean): void {
		this.isAutoOpen = isAutoOpen;
	}

	startCountDown(): void {
		if (!this.labelCountDown) {
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

	resetCountDown(): void {
		this.countdownTime = this.defaultCountDown;
		this.updateCountdownText(this.countdownTime);
	}

	_runAutoTrigger(): void {
		this.stopCountDown();
		this.setAutoOpen(true);
		this.moduleEvent.emit("AUTO_PLAY_BONUS_GAME");
	}

	updateCountdownText(timer: number): void {
		if (Number(timer) > 0 && !this.isAutoOpen) {
			this.labelCountDown.string = this.autoSelectText + timer + " ";
		} else {
			this.labelCountDown.string = "";
		}
	}

	onClickItem(evt: SlotCustomEvent): void {
		evt.stopPropagation();
		const { itemId, isAutoTrigger } = evt.details;
		if (this.checkOpenedBox(itemId)) {
			return;
		}
		this.blockBonusGame();
		this.addItemToOpenBoxes(itemId);
		if (!isAutoTrigger) {
			this.setAutoOpen(false);
			this.resetCountDown();
		}
		this.selectedBox = itemId;
		this.gameLogic.emit(GameLogicUIEvents.SEND_BONUS_GAME_REQUEST, itemId);
	}

	addItemToOpenBoxes(itemId: number): void {
		this.openedBoxes.push(itemId);
	}

	checkOpenedBox(itemId = -1): boolean {
		if (this.openedBoxes.length < 1) {
			return false;
		}
		return this.openedBoxes.indexOf(itemId) > -1;
	}

	unblockBonusGame(): void {
		this.moduleEvent.emit("UNBLOCK_BONUS_GAME");
	}

	blockBonusGame(): void {
		this.moduleEvent.emit("BLOCK_BONUS_GAME");
	}

	exitGameMode(mode): Promise<void> {
		this.moduleEvent.emit("RESET_BONUS_GAME");
		return super.exitGameMode(mode);
	}

	_openItem(bonusValue): Promise<void> {
		this.moduleEvent.emit("OPEN_ITEM", this.selectedBox, bonusValue);
		return Promise.resolve();
	}

	_openFinalItem(bonusValue): Promise<void> {
		return this.moduleEvent.emit("OPEN_FINAL_ITEM", this.selectedBox, bonusValue);
	}

	_unblockBonusGame(): Promise<void> {
		this.unblockBonusGame();
		return Promise.resolve();
	}

	_blockBonusGame(): Promise<void> {
		this.blockBonusGame();
		return Promise.resolve();
	}

	_openAllItems(bonusGameMatrix): Promise<void> {
		return this.moduleEvent.emit("OPEN_ALL_ITEMS", bonusGameMatrix);
	}

	_clearCurrentBonusGameData(): Promise<void> {
		this.openedBoxes = [];
		return Promise.resolve();
	}

	_startCountDown(): Promise<void> {
		this.startCountDown();
		return Promise.resolve();
	}

	_stopCountDown(): Promise<void> {
		this.stopCountDown();
		return Promise.resolve();
	}

	_resetCountDown(): Promise<void> {
		this.resetCountDown();
		return Promise.resolve();
	}

	_resumeOpenedBoxes(matrix): Promise<void> {
		return this.moduleEvent.emit("RESUME_BONUS_GAME", matrix);
	}

	_playFinalResultEffect(): Promise<void> {
		const { jackpot } = this.dataStore.playSession;
		if (jackpot) {
			const data = { cutsceneType: CUTSCENE_TYPE_ENUM.JACKPOT_WIN, cutsceneData: this.dataStore.getJackpotInfo() };
			return this.eventManager.emit(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, data);
		} else {
			const data = { cutsceneType: CUTSCENE_TYPE_ENUM.TOTAL_WIN, cutsceneData: {} };
			return this.eventManager.emit(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, data);
		}
	}

	onFastToResult(_mode): void {
		// to do
	}

	onDestroy(): void {
		if (this._repeatCountDown) {
			this._repeatCountDown.stop();
			this._repeatCountDown = null;
		}
	}
}

```
