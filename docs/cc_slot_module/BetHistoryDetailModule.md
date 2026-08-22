# BetHistoryDetailModule

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/BetHistory/BetHistoryDetailModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetHistoryDetailModule`** extends `SlotBaseModule`

## CC Properties
- `scrollItem`
- `scrollView`
- `scrollContent`
- `summaryView`
- `gameModeView`
- `btnNext`
- `btnPrev`
- `closeButton`
- `infoLabel`
- `payableView`
- `currentModeLabel`
- `sessionGroup`

## Key Methods
- `onLoadExtend(): void`
- `start(): void`
- `setupObserver(): void`
- `enableNextBtn(): void`
- `enablePreviousBtn(): void`
- `initDetailView(): void`
- `onNextClick(): void`
- `onPrevClick(): void`
- `onBackClick(): void`
- `onScrollClick(): void`
- `initScrollItem(): void`
- `enableTabHighlight(): void`
- `hasScrollView(): boolean`
- `onRenderDataView(): void`
- `updateSummaryInfo(): void`

## Source Implementation
```typescript
const { _decorator, instantiate, NodePool, v2 } = cc;
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
import { GameUIEvents } from "../../Core/GameUIEvents";
import { SlotBaseModule } from "../../Core/SlotBaseModule";
const { ccclass, property } = _decorator;
const { inject, MoneyFormatter } = eno;

@ccclass
export class BetHistoryDetailModule extends SlotBaseModule {
	@property(cc.Prefab)
	scrollItem: cc.Prefab = null;
	@property(cc.ScrollView)
	scrollView: cc.ScrollView = null;
	@property(cc.Node)
	scrollContent: cc.Node = null;
	@property(cc.Node)
	summaryView: cc.Node = null;
	@property(cc.Node)
	gameModeView: cc.Node = null;
	@property(cc.Button)
	btnNext: cc.Button = null;
	@property(cc.Button)
	btnPrev: cc.Button = null;
	@property(cc.Button)
	closeButton: cc.Button = null;
	@property(cc.Label)
	infoLabel: cc.Label = null;
	@property(cc.Node)
	payableView: cc.Node = null;
	@property(cc.Label)
	currentModeLabel: cc.Label = null;
	@property(cc.Node)
	sessionGroup: cc.Node = null;

	scrollPool: cc.NodePool = null;
	usingScrollItem: cc.Node[] = [];
	betHistoryData: any;
	betHistoryDetailData: any;
	@inject(MoneyFormatter) moneyFormatter: any;

	onLoadExtend(): void {
		this.node.on("INIT_DETAIL_VIEW", this.initDetailView, this);
		this.eventManager.on(GameUIEvents.BET_HISTORY.ON_SCROLL_CLICK, this.onScrollClick, this);
		this.scrollPool = new NodePool("ScrollHistoryPool");
		this.usingScrollItem = [];
		this.summaryView.active = false;
		this.gameModeView.active = false;
	}

	start(): void {
		this.setupObserver();
	}

	setupObserver(): void {
		this.betHistoryDetailData = this.gameLogic.getDataModel().BetHistoryDetailData;
		this.betHistoryData = this.gameLogic.getDataModel().BetHistoryData;
		this.observer.watch(this.betHistoryDetailData, 'gameModeData', this.initScrollItem.bind(this), this);
		this.observer.watch(this.betHistoryDetailData, 'currentData', this.onRenderDataView.bind(this), this, { fireImmediately: true });
		this.observer.watch(this.betHistoryDetailData, 'isEnableNext', this.enableNextBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
		this.observer.watch(this.betHistoryDetailData, 'isEnablePrev', this.enablePreviousBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
		this.observer.watch(this.betHistoryDetailData, 'currentIndex', this.enableTabHighlight.bind(this), this, { fireImmediately: true });
		this.observer.watch(this.betHistoryData, "isFromHistoryScene", this.hideCloseButton.bind(this), this, { fireImmediately: true });
	};

	enableNextBtn(isEnableNext: boolean): void {
		this.btnNext.interactable = isEnableNext;
	}

	enablePreviousBtn(isEnablePrev: boolean): void {
		this.btnPrev.interactable = isEnablePrev;
	}

	//game logic emit
	initDetailView(data: any): void {
		this._reset();
		this.gameLogic.emit(GameLogicUIEvents.INIT_BET_DETAIL, data);
	};

	onNextClick(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this._resetBetDetailView();
		this.gameLogic.emit(GameLogicUIEvents.BET_DETAIL_NEXT_PAGE);
	};

	onPrevClick(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this._resetBetDetailView();
		this.gameLogic.emit(GameLogicUIEvents.BET_DETAIL_PREVIOUS_PAGE);
	};

	onBackClick(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_BET_HISTORY_DETAIL_PANEL);
	};

	onScrollClick(index: number): void {
		if (index === this.betHistoryDetailData.currentIndex) {
			return;
		}
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this._resetBetDetailView();
		this.gameLogic.emit(GameLogicUIEvents.REQUEST_BET_DETAIL_DATA_PAGE, index);
	};

	initScrollItem(scrollData: any[]): void {
		if (!this.hasScrollView()) {
			return;
		}
		if (!scrollData) {
			this.scrollContent.active = false;
			return;
		}
		this.scrollContent.active = true;
		this._clearScrollItem();
		scrollData.forEach((data, index) => {
			const item = this._getScrollItem();
			item.parent = this.scrollContent;
			item.active = true;
			item.emit('SET_DATA_SCROLL', index, data);
			this.usingScrollItem.push(item);
		});
		this.enableTabHighlight(this.betHistoryDetailData.currentIndex);
	};

	enableTabHighlight(index: number): void {
		if (!this.hasScrollView()) {
			return;
		}
		this.usingScrollItem.forEach((item) => {
			item.emit('ACTIVE_HIGHLIGHT', item["indexPage"] === index);
		});
		this.scrollView.stopAutoScroll();
		if (index >= 1 && index + 1 <= this.usingScrollItem.length) {
			const itemLength = this.usingScrollItem[0].width;
			const offsetX = (index - 1) * itemLength;
			this.scrollView.scrollToOffset(v2(offsetX, 0));
		} else if (index == 0) {
			this.scrollView.scrollToOffset(v2(0, 0));
		}
	};

	hasScrollView(): boolean {
		return !!(this.scrollView && this.scrollContent && this.scrollItem);
	}

	onRenderDataView(data: any): void {
		if (!data || !Object.keys(data).length) {
			return;
		}
		const isActiveSummary = this.betHistoryDetailData.isShowSummaryView;
		this.summaryView.active = isActiveSummary;
		this.gameModeView.active = !isActiveSummary;
		if (isActiveSummary) {
			this.updateSummaryInfo(data);
			this.updateSessionGroup(data);
			this.summaryView.emit('SET_SUMMARY_DATA', data);
		} else {
			this.updateGameModeInfo(data);
			this.gameModeView.emit('RENDER_GAME_MODE_VIEW', data);
			if (this.payableView) {
				this.payableView.emit("UPDATE_PAYABLE_VIEW", data);
			}
		}
		this.updateCurrentModeLabel(data);
	};

	updateSummaryInfo(_data: any): void {
		this.infoLabel.string = "";
	}

	updateGameModeInfo(data: any): void {
		const { latestWinJackpotInfo, winAmount } = data.customData;
		const currentData = this.getCurrentData();
		if (!currentData) {
			cc.warn('currentData is null');
			return;
		}

		const { name: modeName = '' } = currentData;
		let text = `${modeName}`;

		if (winAmount || latestWinJackpotInfo) {
			if (winAmount === 0 && !latestWinJackpotInfo) {
				return;
			}

			if (latestWinJackpotInfo) {
				const jpAmount = latestWinJackpotInfo[0] && latestWinJackpotInfo[0].jackpotAmount;
				text += " + JACKPOT: " + this.moneyFormatter.formatMoney(jpAmount + winAmount);
			} else {
				text += ": " + this.moneyFormatter.formatMoney(winAmount);
			}
		}
		this.infoLabel.string = text;
	}

	getCurrentData(): any {
		return this.betHistoryDetailData.gameModeData[this.betHistoryDetailData.currentIndex];
	}

	updateCurrentModeLabel(data: any): void {
		if (this.currentModeLabel) {
			const currentData = this.getCurrentData();
			if (!currentData) {
				cc.warn('currentData is null');
				return;
			}
			
			const { gameMode } = currentData;
			const modeName = gameMode || '';
			this.currentModeLabel.string = modeName.toUpperCase();
		}
	}

	updateSessionGroup(data: any): void {
		if (this.sessionGroup) {
			this.sessionGroup.emit("SET_SESSION_ID", data.sessionId);
		}
	}

	resetSessionGroup(): void {
		if (this.sessionGroup) {
			this.sessionGroup.emit("RESET_SESSION_ID");
		}
	}

	_getScrollItem(): cc.Node {
		let result = this.scrollPool && this.scrollPool.get();
		if (!result) {
			result = instantiate(this.scrollItem);
		}
		return result;
	};

	_clearScrollItem(): void {
		this.usingScrollItem.forEach((item) => {
			item.emit("RESET");
			this.scrollPool.put(item);
		});
		this.usingScrollItem = [];
	};

	_resetBetDetailView(): void {
		this.summaryView.active = false;
		this.gameModeView.active = false;
		this.gameModeView.emit('RESET_GAME_MODE_VIEW');
		this.summaryView.emit('RESET_SUMMARY_DATA');
		if (this.payableView) {
			this.payableView.emit("RESET_PAYABLE_VIEW");
		}
		this.infoLabel.string = "";
	}

	_reset(): void {
		this._clearScrollItem();
		this._resetBetDetailView();
		this.resetSessionGroup();
		this.summaryView.active = false;
	};

	hideCloseButton(isFromHistoryScene: boolean): void {
		this.closeButton.node.active = !isFromHistoryScene;
	}

	onDestroy(): void {
		if (this.betHistoryDetailData) {
			this.observer.releaseAll(this.betHistoryDetailData, this);
		}
		if (this.betHistoryData) {
			this.observer.releaseAll(this.betHistoryData, this);
		}
	}
}

```
