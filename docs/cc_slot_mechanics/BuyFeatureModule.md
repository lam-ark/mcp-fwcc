# BuyFeatureModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/BuyFeature/scripts/BuyFeatureModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`BuyFeatureModule`** extends `SlotBaseModule`

## CC Properties
- `lbContent`
- `lbBetValue`
- `lbTotalBet`
- `btnIncreaseBet`
- `btnDecreaseBet`
- `btnBuyFeature`

## Key Methods
- `onLoadExtend(): void`
- `start(): void`
- `setupObserver(): void`
- `onUpdateTotalBet(): void`
- `updateBuyButton(): void`
- `getTotalExtraBet(): number`
- `openPanel(): void`
- `closePanel(): void`
- `onBtnConfirm(): void`
- `onBtnClose(): void`
- `onBtnIncreaseBet(): void`
- `onBtnDecreaseBet(): void`
- `onMinBetEnable(): void`
- `onMaxBetEnable(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../../../cc-slot-module/SlotModuleExport';
import { GameLogicUIEvents } from '../../../cc-slot-module/Core/GameLogicUIEvents';
import { BuyFeatureConfig } from './BuyFeatureConfig';
import { HelpDocuments } from '../../../cc-slot-module/Components/Common/HelpDocuments';
const { ccclass, property, help } = _decorator;
const { setOpacity } = eno;

@ccclass
@help(HelpDocuments.BUY_FEATURE_MODULE)
export class BuyFeatureModule extends SlotBaseModule {
	@property(cc.Label) lbContent: cc.Label = null;
	@property(cc.Label) lbBetValue: cc.Label = null;
	@property(cc.Label) lbTotalBet: cc.Label = null;

	@property(cc.Button) btnIncreaseBet: cc.Button = null;
	@property(cc.Button) btnDecreaseBet: cc.Button = null;
	@property(cc.Button) btnBuyFeature: cc.Button = null;

	@property sfxIncreaseBetId: string = "BTN_BET_INCREASE";
	@property sfxDecreaseBetId: string = "BTN_BET_DECREASE";

	uiManagerData: any = null;
	_betData: any = null;
	_buyFeatureConfig: BuyFeatureConfig = null;

	onLoadExtend(): void {
		this._buyFeatureConfig = this.getComponent(BuyFeatureConfig);
		this.lbContent.string = this._buyFeatureConfig.CONTEXT_TEXT
	}

	protected start(): void {
		this._betData = this.gameLogic && this.gameLogic.getDataModel() && this.gameLogic.getDataModel().BetData;
		this.setupObserver();
	}

	setupObserver(): void {
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this.observer.watch(this.uiManagerData, "isBuyFeaturePanelOpen", (isOpen) => {
			this.node.active = isOpen;
			setOpacity(this.node, isOpen ? 255 : 0);
		}, this, { fireImmediately: true });

		this.observer.watch(this._betData, "totalBet", this.onUpdateTotalBet.bind(this), this, { fireImmediately: true });
		this.observer.watch(this._betData, "minBetEnable", this.onMinBetEnable.bind(this), this, { canTriggerSameValue: true });
		this.observer.watch(this._betData, "maxBetEnable", this.onMaxBetEnable.bind(this), this, { canTriggerSameValue: true });
	}

	onUpdateTotalBet(betValue: number): void {
		this.lbBetValue.node.emit("ON_UPDATE_VALUE", betValue);
		this.lbTotalBet.node.emit("ON_UPDATE_VALUE", this.getTotalExtraBet());
	}

	updateBuyButton(): void {
		const totalBet = this.getTotalExtraBet();
		this.btnBuyFeature.interactable = this.gameLogic.getWalletManager().hasEnoughBalance(totalBet);
	}

	getTotalExtraBet(): number {
		const betManager = this.gameLogic.getBetManager();
		const totalExtraBet = betManager.getTotalExtraBet(this._betData.betKey, this._buyFeatureConfig.PREFIX_EXTRA_BET);
		return totalExtraBet;
	}

	openPanel(): void {
		this.gameLogic.emit(GameLogicUIEvents.OPEN_BUY_FEATURE_PANEL);
	}

	closePanel(): void {
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_BUY_FEATURE_PANEL);
	}

	onBtnConfirm(): void {
		this.soundPlayer && this.soundPlayer.playSFXClick()
		if (this._betData) {
			this.gameLogic.emit(GameLogicUIEvents.SEND_BUY_FEATURE_SPIN_REQUEST, this._betData.betKey, this._buyFeatureConfig.PREFIX_EXTRA_BET);
		}
	}

	onBtnClose(): void {
		this.soundPlayer && this.soundPlayer.playSFXClick()
		this.closePanel();
	}

	onBtnIncreaseBet(): void {
		this.soundPlayer && this.soundPlayer.playSfx(this.sfxIncreaseBetId);
		this.gameLogic.emit(GameLogicUIEvents.INCREASE_BET);
	}

	onBtnDecreaseBet(): void {
		this.soundPlayer && this.soundPlayer.playSfx(this.sfxDecreaseBetId);
		this.gameLogic.emit(GameLogicUIEvents.DECREASE_BET);
	}

	onMinBetEnable(minBetEnable: boolean): void {
		this.btnDecreaseBet.interactable = minBetEnable;
	}

	onMaxBetEnable(maxBetEnable: boolean): void {
		this.btnIncreaseBet.interactable = maxBetEnable;
	}

	protected onDestroy(): void {
		this.observer.releaseAll(this.uiManagerData, this);
		this.observer.releaseAll(this._betData, this);
	}
}
```
