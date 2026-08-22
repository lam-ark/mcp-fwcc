# PaylineInfoModule

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/PaylineInfo/PaylineInfoModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`PaylineInfoModule`** extends `SlotBaseModule`

## CC Properties
- `useAcrossAllGameModes`
- `lbLeft`
- `lbRight`
- `sprSymbol`
- `smallSymbolFrames`

## Key Methods
- `onLoadExtend(): void`
- `start(): void`
- `localizeText(): void`
- `getWinText(): string`
- `shouldWorkInCurrentGameMode(): boolean`
- `showPaylineInfo(): void`
- `hidePaylineInfo(): void`
- `convertPayLineInfo(): any`
- `convertPayLineInfoLine(): any`
- `convertPayLineInfoAllWays(): any`
- `formatMoney(): ''`
- `convertPayLineInfoCluster(): any`
- `convertPayLineInfoScatterPay(): any`
- `setPaylineInfo(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../../Core/SlotBaseModule';
import { GameConfig } from '../../Core/GameConfig';
import { GAME_MODE_ENUM, PAY_SYSTEM_TYPE_ENUM } from '../../Components/Common/SlotEnum';
import { GameDataStore } from '../../Core/GameDataStore';
const { ccclass, property } = _decorator;
const { MoneyFormatter, inject } = eno;

@ccclass
export class PaylineInfoModule extends SlotBaseModule {
	@property()
	useAcrossAllGameModes: boolean = false;

	@property({type:GAME_MODE_ENUM, visible: function(this: PaylineInfoModule) {
		return !this.useAcrossAllGameModes;
	}})
	gameMode = GAME_MODE_ENUM.NORMAL_GAME;

	@property(cc.Label) lbLeft: cc.Label = null;
	@property(cc.Label) lbRight: cc.Label = null;
	@property(cc.Sprite) sprSymbol: cc.Sprite = null;
	

	@property smallSymbolPrefix: string = '';
	@property(cc.SpriteFrame) smallSymbolFrames: cc.SpriteFrame[] = [];

	@inject(MoneyFormatter) moneyFormatter: eno.MoneyFormatter;
	@inject(GameConfig) gameConfig: GameConfig;
	@inject(GameDataStore) dataStore: GameDataStore;

	lineText: string = "";
	winText: string = "";
	creditText: string = "";

	_symbolAssets: { [key: string]: cc.SpriteFrame } = {};

	onLoadExtend(): void {
		this.eventManager.on('ON_SHOW_PAYLINE_INFO', this.showPaylineInfo, this);
		this.eventManager.on('ON_HIDE_PAYLINE_INFO', this.hidePaylineInfo, this);

		this._symbolAssets = eno.CommonUtils.convertAssetArrayToObject(this.smallSymbolFrames, true);
		this.localizeText();
	}

	start(): void {
		this.hidePaylineInfo();
	}

	localizeText(): void {
		this.lineText = this.gameLogic.getGameText("LINE");
		this.winText = this.gameLogic.getGameText(this.getWinText());
	}

	getWinText(): string {
		return this.gameConfig.PAY_SYSTEM === PAY_SYSTEM_TYPE_ENUM.LINES ? "WIN_TEXT_1" : "WIN";
	}

	/**
	 * Check if PaylineInfo should work in current game mode
	 * @returns true if should work, false otherwise
	 */
	protected shouldWorkInCurrentGameMode(): boolean {
		if (this.useAcrossAllGameModes) {
			return true;
		}
		
		return this.dataStore.currentGameMode === this.gameMode;
	}

	protected showPaylineInfo(data: any): void {
		if (!this.shouldWorkInCurrentGameMode()) {
			return;
		}
		this.node.active = true;
		this.setPaylineInfo(data);
	}

	protected hidePaylineInfo(): void {
		// Check if should work in current game mode
		if (!this.shouldWorkInCurrentGameMode()) {
			return;
		}
		this.node.active = false;
	}

	protected convertPayLineInfo(paylineInfo: any): any {
		switch (this.gameConfig.PAY_SYSTEM) {
			case PAY_SYSTEM_TYPE_ENUM.ALLWAYS:
				return this.convertPayLineInfoAllWays(paylineInfo);
			case PAY_SYSTEM_TYPE_ENUM.LINES:
				return this.convertPayLineInfoLine(paylineInfo);
			case PAY_SYSTEM_TYPE_ENUM.CLUSTER:
				return this.convertPayLineInfoCluster(paylineInfo);
			case PAY_SYSTEM_TYPE_ENUM.SCATTER_PAY:
				return this.convertPayLineInfoScatterPay(paylineInfo);
		}
	}

	protected convertPayLineInfoLine({ payLineID, payLineWinNumbers, payLineWinAmount, symbolId }: any): any {
		const leftString = `${this.lineText} ${payLineID} ${this.winText} ` + payLineWinNumbers + " x";
		const rightString = "= " + this.moneyFormatter.formatMoney(payLineWinAmount) + "";
		return { leftString, rightString, symbolId };
	}

	protected convertPayLineInfoAllWays({ symbolId, payLineWinAmount, reelCount, combination }: any): any {
		const winCombination = eno.FloatUtils.div(payLineWinAmount, combination);
		const symbolPayTableString = `${this.winText} ` + this.moneyFormatter.formatMoney(winCombination);
		const combinationString = combination > 1 ? ' x' + combination + ' = ' : '';
		const winAmount = combination > 1 ? this.moneyFormatter.formatMoney(payLineWinAmount) : '';
		const leftString = `${reelCount}`;
		const rightString = symbolPayTableString + combinationString + winAmount;

		return { leftString, rightString, symbolId };
	}

	protected convertPayLineInfoCluster({ symbolId, payLineWinAmount, payLineWinNumbers }: any): any {
		const leftString = `${this.winText} ` + payLineWinNumbers;
		const rightString = "= " + this.moneyFormatter.formatMoney(payLineWinAmount) + "";

		return { leftString, rightString, symbolId };
	}

	protected convertPayLineInfoScatterPay({ symbolId, payLineWinAmount, payLineWinNumbers }: any): any {
		const leftString = `${this.winText} ` + payLineWinNumbers;
		const rightString = "= " + this.moneyFormatter.formatMoney(payLineWinAmount) + "";

		return { leftString, rightString, symbolId };
	}

	protected setPaylineInfo(paylineInfo: any): void {
		if (!paylineInfo || eno.isEmptyObject(paylineInfo)) {
			this.lbLeft.string = '';
			this.lbRight.string = '';
			this.sprSymbol.spriteFrame = null;
			return;
		}

		const { symbolId, leftString, rightString } = this.convertPayLineInfo(paylineInfo);

		this.lbLeft.string = leftString;
		this.lbRight.string = rightString;
		this.sprSymbol.spriteFrame = this._symbolAssets[`${this.smallSymbolPrefix}${symbolId}`];
	}
}


```
