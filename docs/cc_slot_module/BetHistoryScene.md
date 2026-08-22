# BetHistoryScene

> **Source Path**: `assets/cc-common/cc-slot-module/Components/BetHistoryScene.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetHistoryScene`** extends `SlotBaseModule`

## CC Properties
- `betHistoryPrefab`

## Key Methods
- `onLoadExtend(): void`
- `_updateCurrencyConfig(): void`

## Source Implementation
```typescript
const { _decorator, instantiate } = cc;
import { BetHistoryModule } from "../Popup/BetHistory/BetHistoryModule";
import { SlotBaseModule } from "../Core/SlotBaseModule";
import { GameLogicUIEvents } from "../Core/GameLogicUIEvents";
const { inject } = eno;
import { GameConfig } from "../Core/GameConfig";
import { verifyCurrencyInHistoryScene } from "../GameViewUnitTest";
const { ccclass, property } = _decorator;

@ccclass
export class BetHistoryScene extends SlotBaseModule {
	@property(cc.Prefab)
	betHistoryPrefab: cc.Prefab = null;

	@inject(GameConfig) gameConfig: GameConfig = null;

	playSessionId: string = "";
	token: string = "";
	tokenType: string = "";
	userId: string = "";
	currencyCode: string = "";
	betInstance: cc.Node = null;
	betHistory: BetHistoryModule = null;

	onLoadExtend(): void {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		this.playSessionId = urlParams.get("psId");
		this.token = urlParams.get("token");
		this.tokenType = urlParams.get("tokenType");
		this.userId = urlParams.get("userId");
		this.currencyCode = urlParams.get("c");

		if (this.currencyCode) {
			this._updateCurrencyConfig();
		}

		if (this.betHistoryPrefab && this.playSessionId) {
			this.betInstance = instantiate(this.betHistoryPrefab);
			this.betInstance.parent = this.node;
			this.betInstance.active = true;
			this.betInstance.setPosition(0, 0);
			this.betHistory = this.betInstance.getComponent(BetHistoryModule);

			this.scheduleOnce(() => {
				this.gameLogic.emit(GameLogicUIEvents.OPEN_BET_HISTORY_PANEL, { isFromHistoryScene: true });
				this.scheduleOnce(() => {
					this.gameLogic.emit(GameLogicUIEvents.OPEN_BET_HISTORY_DETAIL_PANEL, {
						sessionId: this.playSessionId,
						token: this.token,
						tokenType: this.tokenType,
						userId: this.userId || "default",
					});
				});
			});
		} else {
			cc.warn(`[BetHistoryScene] Cant get history prefab for game`);
		}
	}

	_updateCurrencyConfig(): void {
		if (!verifyCurrencyInHistoryScene(this.gameLogic, this.currencyCode, this.gameConfig)) {
			return;
		}
		this.gameLogic.setCurrency(this.currencyCode.toUpperCase());
		const moneyFormatter = this.gameLogic.getMoneyFormatter();
		const currencyConfig = this.gameConfig.CURRENCY_CONFIG[this.currencyCode.toUpperCase()];
		moneyFormatter.updateConfig(currencyConfig);
    }
}

```
