# BetHistoryModule

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/BetHistory/BetHistoryModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetHistoryModule`** extends `BaseUIPopup`

## CC Properties
- `recordView`
- `detailView`
- `nextBtn`
- `backBtn`
- `closeBtn`
- `loading`
- `messageNode`
- `messageLabel`
- `pageIndexNode`
- `pageIndexLabel`
- `textPage`

## Key Methods
- `onLoadExtend(): void`
- `init(): void`
- `start(): void`
- `localizeText(): void`
- `setupObserver(): void`
- `showContent(): void`
- `showBetHistory(): void`
- `openPopup(): void`
- `resetBetHistory(): void`
- `showRecordView(): void`
- `enableNextBtn(): void`
- `enablePreviousBtn(): void`
- `onNextPage(): void`
- `onPrevPage(): void`
- `onClose(): void`

## Source Implementation
```typescript
const { _decorator, Node } = cc;
import { BaseUIPopup } from "../BaseUIPopup";
import { GameUIEvents } from "../../Core/GameUIEvents";
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
const { ccclass, property } = _decorator;
@ccclass
export class BetHistoryModule extends BaseUIPopup {
	@property
	itemPerPage: number = 5;
	@property(cc.Node)
	recordView: cc.Node = null;
	@property(cc.Node)
	detailView: cc.Node = null;
	@property(cc.Button)
	nextBtn: cc.Button = null;
	@property(cc.Button)
	backBtn: cc.Button = null;
	@property(cc.Button)
	closeBtn: cc.Button = null;
	@property(cc.Node)
	loading: cc.Node = null;
	@property(cc.Node)
	messageNode: cc.Node = null;
	@property(cc.Label)
	messageLabel: cc.Label = null;
	@property(cc.Node)
	pageIndexNode: cc.Node = null;
	@property(cc.Label)
	pageIndexLabel: cc.Label = null;
	@property(cc.Label)
	textPage: cc.Label = null;

	modelData = null;
	isInit = false;

	onLoadExtend(): void {
		this.init();
		this.setupObserver();
		super.onLoadExtend();
	}

	init(): void {
		this.pageIndexNode.active = false;
		this.eventManager.on(GameUIEvents.BET_HISTORY.OPEN_BET_DETAIL, this.openBetDetail, this);
	}

	start(): void {
		this.recordView.active = true;
		this.detailView.active = false;
		this.localizeText();
		this.resetBetHistory();
	}

	localizeText(): void {
		if (this.textPage) {
			this.textPage.string = this.gameLogic.getGameText("HISTORY_PAGE");
		}
	}
	
	setupObserver(): void {
		this.modelData = this.gameLogic.getDataModel().BetHistoryData;
		this.observer.watch(this.modelData,"isShowing", this.showContent.bind(this), this);
		this.observer.watch(this.modelData,"isShowingRecord", this.showRecordView.bind(this), this);
		this.observer.watch(this.modelData,"isEnableNext", this.enableNextBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
		this.observer.watch(this.modelData,"isEnablePrev", this.enablePreviousBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });

		this.observer.watch(this.modelData,"isEnableLoading", this.onEnableLoading.bind(this), this);
		this.observer.watch(this.modelData,"messageText", this.onUpdateMessage.bind(this), this);
		this.observer.watch(this.modelData,"recordData", this.onRecordDataChange.bind(this), this);
		this.observer.watch(this.modelData,"isShowingDetail", this.onShowingDetail.bind(this), this, { fireImmediately: true });
		this.observer.watch(this.modelData,"isEnableMessage", this.onShowMessage.bind(this), this);
		this.observer.watch(this.modelData,"pageIndex", this.onPageIndexChange.bind(this), this);
		this.observer.watch(this.modelData, "isFromHistoryScene", this.hideCloseButton.bind(this), this, { fireImmediately: true });
	}

	showContent(isActive: boolean): void {
		if (this.modelData.isFromHistoryScene) {
			this.activePopup(true);
			this.showRecordView(true);
		} else {
			this.showBetHistory(isActive);
		}
	}

	showBetHistory(isActive: boolean): void {
		if (isActive) {
			this.togglePopup(true, () => {
				this.openPopup();
				this.showRecordView(true);
			});
		} else {
			this.togglePopup(false);
		}
	}

	openPopup(): void {
		const data = { itemPerPage: this.itemPerPage };
		this.gameLogic.emit(GameLogicUIEvents.INIT_BET_HISTORY, data);
	}

	resetBetHistory(): void {
		this.nextBtn.interactable = false;
		this.backBtn.interactable = false;
		this.pageIndexNode.active = false;
		this.messageNode.active = false;
	}

	showRecordView(isActive: boolean): void {
		if (this.popupBehavior.isPlaying()) {
			return;
		}
		this.recordView.active = isActive;
	}

	enableNextBtn(isEnableNext: boolean): void {
		this.nextBtn.interactable = isEnableNext;
	}

	enablePreviousBtn(isEnablePrev: boolean): void {
		this.backBtn.interactable = isEnablePrev;
	}

	onNextPage(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.BET_HISTORY_NEXT_PAGE);
	}

	onPrevPage(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.BET_HISTORY_PREVIOUS_PAGE);
	}

	onClose(): void {
		if (this.popupBehavior && this.popupBehavior.isPlaying()) {
			return;
		}
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_BET_HISTORY_PANEL);
	}

	openBetDetail(data: any): void {
		this.gameLogic.emit(GameLogicUIEvents.OPEN_BET_HISTORY_DETAIL_PANEL, data);
	}

	hideCloseButton(isFromHistoryScene: boolean): void {
		this.closeBtn.node.active = !isFromHistoryScene;
	}

	//handle event
	onEnableLoading(isActive: boolean): void {
		this.loading.active = isActive;
	}

	onUpdateMessage(value: string): void {
		this.messageLabel.string = "" + value;
	}
	
	onRecordDataChange(value: any): void {
		if (!this.modelData || !value) {
			this.recordView.emit("CLEAR_DATA");
			return;
		}
		if (!this.modelData.isShowingRecord) {
			return;
		}
		this.recordView.active = true;
		this.recordView.emit("UPDATE_DATA", value, this.itemPerPage);
	}

	onShowingDetail(isOpen: boolean): void {
		this.detailView.active = isOpen;
		if (!isOpen || !this.modelData) {
			return;
		}
		const { detailData } = this.modelData;
		this.detailView.emit("INIT_DETAIL_VIEW", detailData);
	}

	onShowMessage(isActive: boolean): void {
		this.messageNode.active = isActive;
		this.messageLabel.string = isActive ? this.modelData.messageText : "";
	}

	onPageIndexChange(index: number): void {
		this.pageIndexNode.active = index > 0;
		this.pageIndexLabel.string = "" + index;
	}

	onDestroy(): void {
		if (this.modelData) {
			this.observer.releaseAll(this.modelData, this);
		}
	}
}

```
