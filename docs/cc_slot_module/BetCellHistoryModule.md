# BetCellHistoryModule

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/BetHistory/BetCellHistoryModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetCellHistoryModule`** extends `SlotBaseModule`

## CC Properties
- `session`
- `time`
- `betDenom`
- `betLines`
- `totalBet`
- `winAmount`
- `detailBtn`
- `featureGroup`
- `freeCircle`
- `bonusCircle`
- `topUpCircle`
- `jackpotCircle`
- `positionCircles`

## Key Methods
- `onLoadExtend(): void`
- `updateTotalLineText(): void`
- `updateData(): void`
- `updateBetLines(): void`
- `onClickDetail(): void`
- `playSfxClick(): void`
- `addCircle(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { GameUIEvents } from "../../Core/GameUIEvents";
const { ccclass, property } = _decorator;
const { inject, MoneyFormatter } = eno;

@ccclass
export class BetCellHistoryModule extends SlotBaseModule {
	@property(cc.Label)
	session: cc.Label = null;
	@property(cc.Label)
	time: cc.Label = null;
	@property(cc.Label)
	betDenom: cc.Label = null;
	@property(cc.Label)
	betLines: cc.Label = null;
	@property(cc.Label)
	totalBet: cc.Label = null;
	@property(cc.Label)
	winAmount: cc.Label = null;
	@property(cc.Node)
	detailBtn: cc.Node = null;
	@property(cc.Node)
	featureGroup: cc.Node = null;
	@property(cc.Node)
	freeCircle: cc.Node = null; // yellow
	@property(cc.Node)
	bonusCircle: cc.Node = null; // blue
	@property(cc.Node)
	topUpCircle: cc.Node = null; //green
	@property(cc.Node)
	jackpotCircle: cc.Node = null; // red
	@property(cc.Node)
	positionCircles: cc.Node[] = [];
	@property
	timeFormat: string = "DD/MM hh:mm:ss";
	@property
	breakLineTimeString: boolean = false;
	@property
	totalLineText: string = "";

	playSessionId = null;
	dataDetail = null;

	@inject(MoneyFormatter) moneyFormatter: eno.MoneyFormatter;

	onLoadExtend(): void {
		this.node.on("UPDATE_DATA", this.updateData, this);

		if (this.freeCircle) {
			this.freeCircle.active = false;
		}
		if (this.bonusCircle) {
			this.bonusCircle.active = false;
		}
		if (this.topUpCircle) {
			this.topUpCircle.active = false;
		}
		if (this.jackpotCircle) {
			this.jackpotCircle.active = false;
		}
		this.updateTotalLineText();
	}

	updateTotalLineText(): void {
		if (!this.totalLineText) {
			this.totalLineText = this.gameLogic.getGameText("TEXT_ALL_WAYS") || "";
		}
	}

	updateData(data: any): void {
		this.detailBtn.active = false;

		if (!data) {
			return;
		}
		this.playSessionId = data.sessionId;
		this.session.string = "#" + data.sessionId.substring(data.sessionId.length - 8, data.sessionId.length);
		this.time.string = eno.TimeUtils.formatTimeStamp(Number(data.time), this.timeFormat, this.breakLineTimeString);
		if (this.betDenom) {
			this.betDenom.string = `${Number(data.betDenom)}`;
		}
		this.totalBet.string = this.moneyFormatter.formatMoney(Number(data.totalBetAmount));
		this.winAmount.string = this.moneyFormatter.formatMoney(data.totalWinAmount);

		this.updateBetLines(data);

		this.detailBtn.active = true;

		this.dataDetail = data;
		if (this.featureGroup) {
			this.freeCircle.active = data.freeGameTotal > 0;
			this.bonusCircle.active = data.totalBonusWinAmount > 0;
		}
		this.addCircle(data);
	}

	updateBetLines(data: any): void {
		if (this.betLines) {
			const bettingLines = data.bettingLines;
			const betLineNumber = bettingLines && Number(bettingLines) > 0 ? `${Number(bettingLines)}` : this.totalLineText;
			this.betLines.string = betLineNumber;
		}
	}

	onClickDetail(): void {
		this.eventManager.emit(GameUIEvents.BET_HISTORY.OPEN_BET_DETAIL, {
			sessionId: this.playSessionId,
			summaryData: this.dataDetail,
		});
		this.playSfxClick();
	}

	playSfxClick(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
	}

	addCircle(data: any): void {
		if (!data) {
			return;
		}
		let listMode = [];
		if (this.freeCircle) {
			this.freeCircle.active = false;
		}
		if (this.bonusCircle) {
			this.bonusCircle.active = false;
		}
		if (this.topUpCircle) {
			this.topUpCircle.active = false;
		}
		if (this.jackpotCircle) {
			this.jackpotCircle.active = false;
		}

		const { freeGameTotal, totalJpWinAmount, totalBonusWinAmount } = data;

		if (totalJpWinAmount && totalJpWinAmount > 0 && this.jackpotCircle) {
			this.jackpotCircle.active = true;
			listMode.push(this.jackpotCircle);
		}
		if (totalBonusWinAmount && totalBonusWinAmount > 0 && this.bonusCircle) {
			this.bonusCircle.active = true;
			listMode.push(this.bonusCircle);
		}

		if (freeGameTotal && this.freeCircle) {
			this.freeCircle.active = true;
			listMode.push(this.freeCircle);
		}

		if (listMode.length > 0 && this.positionCircles.length > 0) {
			listMode.forEach((item, index) => {
				const position = this.positionCircles[index].position;
				item.setPosition(position);
			});
		}
	}
}

```
