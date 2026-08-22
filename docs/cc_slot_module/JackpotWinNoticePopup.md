# JackpotWinNoticePopup

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/NotifyJackpot/JackpotWinNoticePopup.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`JackpotWinNoticePopup`** extends `SlotBaseModule`

## CC Properties
- `displayNameLb`
- `textWin`
- `winAmountLb`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `showWinNotice(): void`
- `showNextWinner(): void`
- `showCurrentWinner(): void`
- `showInfo(): void`
- `hideCurrentWinner(): void`
- `onClosePopup(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Enum, tween } = cc;
import { SlotBaseModule } from '../../Core/SlotBaseModule';
const { inject } = eno;
const { ccclass, property } = _decorator;

export interface NotifyJackpotWinInfo {
	jpId: string; // jackpot id
	amt: number; // win amount
	dn: string; // display name
	bId: string; // bet id
}

const STATE = Enum({
	CLOSED: 0,
	MOVING: 1,
	IDLE: 2,
	CLOSING: 3,
});

@ccclass
export class JackpotWinNoticePopup extends SlotBaseModule {
	@inject(eno.MoneyFormatter)
	moneyFormatter: eno.MoneyFormatter = null;
	@property({ type: cc.Label })
	displayNameLb = null;
	@property({ type: cc.Label })
	textWin = null;
	@property({ type: cc.Label })
	winAmountLb = null;
	@property
	delayTime: number = 4;
	@property
	delayNextWinner: number = 2;
	@property
	fadeTime: number = 0.5;
	
    jackpotData: eno.JackpotData = null;
    modelName: string = "JackpotData";

    onLoadExtend(): void {
        this.setupObserver();
		this.node.active = false;
    }

    setupObserver(): void {
        this.jackpotData = this.gameLogic.getDataModel()[this.modelName];
		this.observer.watch(this.jackpotData, "notifyJackpotInfo", this.showWinNotice.bind(this), this);
	}

	protected _listWinJP: NotifyJackpotWinInfo[] = [];
	protected _currentAward: NotifyJackpotWinInfo = null;
	protected _currentState: number = 0;

	showWinNotice({ jpInfo, isMe }: { jpInfo: NotifyJackpotWinInfo[], isMe: boolean }): void {
		if (!jpInfo || !jpInfo.length) {
            return;
        }
		this._listWinJP = jpInfo.filter((user) => user.dn !== this.gameLogic.getUserDisplayName());
		if (this._currentState === STATE.CLOSED && this._listWinJP.length > 0) {
			this.showCurrentWinner();
		}
	}

	showNextWinner(): void {
		this.scheduleOnce(this.showCurrentWinner, this.delayNextWinner);
	}

	showCurrentWinner(): void {
		if (this._listWinJP.length === 0) {
			eno.setOpacity(this.node, 0);
            this.node.active = false;
			return;
		}
		this._currentState = STATE.MOVING;
		this._currentAward = this._listWinJP.pop();

		this.node.active = true;
		eno.setOpacity(this.node, 0);
        eno.fadeIn(this.node, this.fadeTime);

		this.showInfo();
		tween(this.node)
			.delay(this.fadeTime)
            .call(() => {
				this._currentState = STATE.IDLE;
			})
			.delay(this.delayTime)
			.call(() => {
				this.hideCurrentWinner();
			})
			.start();
	}

	showInfo(): void {
		this.displayNameLb.string = this._currentAward.dn;
        this.textWin.string = this.gameLogic.getGameText("NOTIFY_JP_WON");
		this.winAmountLb.string = this.moneyFormatter.formatMoney(this._currentAward.amt);
	}

	hideCurrentWinner(): void {
		this._currentState = STATE.CLOSED;
		eno.fadeOut(this.node, this.fadeTime);
        this.showNextWinner();
	}

	onClosePopup(): void {
		if (this._currentState === STATE.IDLE) {
			this.hideCurrentWinner();
		}
	}

	onDestroy(): void {
		this.observer.releaseAll(this.jackpotData, this);
		this.unscheduleAllCallbacks();
		this.node.stopAllActions();
	}
}


```
