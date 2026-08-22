# JackpotHistoryModule

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/JackpotHistory/JackpotHistoryModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`JackpotHistoryModule`** extends `BaseUIPopup`

## CC Properties
- `recordView`
- `nextBtn`
- `backBtn`
- `backClose`
- `loading`
- `messageNode`
- `messageLabel`
- `pageIndexNode`
- `pageIndexLabel`
- `textPage`

## Key Methods
- `onLoadExtend(): void`
- `start(): void`
- `localizeText(): void`
- `setupObserver(): void`
- `onShowJackpotHistory(): void`
- `openPopup(): void`
- `resetJackpotHistory(): void`
- `onShowRecordView(): void`
- `enableNextBtn(): void`
- `enablePreviousBtn(): void`
- `onShowLoading(): void`
- `onShowMessage(): void`
- `onUpdatePageIndex(): void`
- `onNextPage(): void`
- `onPrevPage(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
const { ccclass, property } = _decorator;
import { GameLogicUIEvents } from '../../Core/GameLogicUIEvents';
import { BaseUIPopup } from '../BaseUIPopup';

@ccclass
export class JackpotHistoryModule extends BaseUIPopup {
	@property itemPerPage: number = 10;
	@property jpList: string = "GRAND-MAJOR";
	@property(cc.Node) recordView: cc.Node = null;
	@property(cc.Button) nextBtn: cc.Button = null;
	@property(cc.Button) backBtn: cc.Button = null;
	@property(cc.Button) backClose: cc.Button = null;
	@property(cc.Node) loading: cc.Node = null;
	@property(cc.Node) messageNode: cc.Node = null;
	@property(cc.Label) messageLabel: cc.Label = null;
	@property(cc.Node) pageIndexNode: cc.Node = null;
	@property(cc.Label) pageIndexLabel: cc.Label = null;
	@property(cc.Label) textPage: cc.Label = null;

	jackpotHistoryData: eno.JackpotHistoryData = null;

	onLoadExtend(): void {
		this.jackpotHistoryData = this.gameLogic.getDataModel().JackpotHistoryData;

		this.pageIndexNode.active = false;
		this.setupObserver();
		super.onLoadExtend();
	}

	start(): void {
		this.localizeText();
		this.resetJackpotHistory();
	}

	localizeText(): void {
		if (this.textPage) {
			this.textPage.string = this.gameLogic.getGameText("HISTORY_PAGE");
		}
	}

	setupObserver(): void {
		this.observer.watch(this.jackpotHistoryData, 'isShowing', this.onShowJackpotHistory.bind(this), this);
		this.observer.watch(this.jackpotHistoryData, 'recordData', this.onShowRecordView.bind(this), this);

		if (this.loading) {
			this.observer.watch(this.jackpotHistoryData, 'isEnableLoading', this.onShowLoading.bind(this), this);
		}

		if (this.messageNode && this.messageLabel) {
			this.observer.watch(this.jackpotHistoryData, 'isEnableMessage', this.onShowMessage.bind(this), this);
		}

		if (this.pageIndexNode && this.pageIndexLabel) {
			this.observer.watch(this.jackpotHistoryData, 'pageIndex', this.onUpdatePageIndex.bind(this), this);
		}

		this.observer.watch(this.jackpotHistoryData, 'isEnableNext', this.enableNextBtn.bind(this), this, { canTriggerSameValue: true });
		this.observer.watch(this.jackpotHistoryData, 'isEnablePrev', this.enablePreviousBtn.bind(this), this, { canTriggerSameValue: true });
	}

	onShowJackpotHistory(isActive: boolean): void {
		if (isActive) {
			this.openPopup();
			this.togglePopup(true);
		} else {
			this.togglePopup(false);
		}
	}

	openPopup(): void {
		const data = { itemPerPage: this.itemPerPage, jpList: this.jpList };
		this.gameLogic.emit(GameLogicUIEvents.INIT_JACKPOT_HISTORY, data);
	}

	resetJackpotHistory(): void {
		this.nextBtn.interactable = false;
		this.backBtn.interactable = false;
		this.pageIndexNode.active = false;
		this.messageNode.active = false;
	}

	onShowRecordView(data: any): void {
		if (data === null) {
			this.recordView.emit("CLEAR_DATA");
			return;
		}
		this.recordView.active = true;
		const originalData = JSON.parse(JSON.stringify(data));
		this.recordView.emit('UPDATE_DATA', originalData, this.itemPerPage);
	}

	enableNextBtn(isEnableNext: boolean): void {
		this.nextBtn.interactable = isEnableNext;
	}

	enablePreviousBtn(isEnablePrev: boolean): void {
		this.backBtn.interactable = isEnablePrev;
	}

	onShowLoading(isActive: boolean): void {
		this.loading.active = isActive;
	}

	onShowMessage(value: boolean): void {
		this.messageNode.active = value;
		if (value) {
			this.messageLabel.string = this.jackpotHistoryData.messageText;
		}
	}

	onUpdatePageIndex(index: number): void {
		this.pageIndexNode.active = index && index > 0;
		this.pageIndexLabel.string = " " + index;
	}

	onNextPage(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.REQUEST_JACKPOT_NEXT_PAGE);
	}

	onPrevPage(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.REQUEST_JACKPOT_PREVIOUS_PAGE);
	}

	onClose(): void	{
		if (this.popupBehavior && this.popupBehavior.isPlaying()) {
			return;
		}
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_JACKPOT_HISTORY_PANEL);
	}

	onDestroy(): void {
		this.observer.releaseAll(this.jackpotHistoryData, this);
	}
}


```
