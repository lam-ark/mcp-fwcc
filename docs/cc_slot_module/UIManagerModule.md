# UIManagerModule

> **Source Path**: `assets/cc-common/cc-slot-module/Core/UIManagerModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`UIManagerModule`** extends `SlotBaseModule`

## CC Properties
- `jackpot`
- `trialJackpot`
- `bet`
- `wallet`
- `winAmount`
- `turbo`
- `normalSpinButton`
- `freeSpinButton`
- `normalSpinTimes`
- `freeSpinTimes`
- `paylineInfoNormalGame`
- `paylineInfoFreeGame`
- `promotionUI`
- `buyFeatureButton`
- `cutsceneControl`
- `popupControl`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `updateGameModeUI(): void`
- `showUIForGameMode(): void`
- `setNodeActive(): void`
- `setNodeOpacity(): void`
- `hideAllUI(): void`
- `hideUIElements(): void`
- `hidePromotionUI(): void`
- `hideSpinControls(): void`
- `hidePaylineInfo(): void`
- `showNormalGameUI(): void`
- `showPromotionUI(): void`
- `showNormalUIElements(): void`
- `showNormalSpinControls(): void`

## Source Implementation
```typescript
const { _decorator, warn } = cc;
import { GameDataStore } from "./GameDataStore";
import { SlotBaseModule } from "./SlotBaseModule";
import { GAME_MODE_ENUM } from "../Components/Common/SlotEnum";
import { PopupControllerModule } from "../Popup/PopupControllerModule";
import { CutsceneController } from "../CutScene/CutsceneController";
import { GameUIEvents } from "./GameUIEvents";
import { SlotGameSettings } from "./SlotGameSettings";
const { ccclass, property } = _decorator;
const { inject } = eno;

@ccclass
export class UIManagerModule extends SlotBaseModule {
	@inject(GameDataStore) dataStore: GameDataStore;
	@inject(SlotGameSettings) gameSettings: SlotGameSettings;
	@property(cc.Node)
	jackpot: cc.Node = null;
	@property(cc.Node)
	trialJackpot: cc.Node = null;
	@property(cc.Node)
	bet: cc.Node = null;
	@property
	hasExtraBet: boolean = false;
	@property({ type: cc.Node, visible: function(this: UIManagerModule) {
		return this.hasExtraBet; 
	}})
	extraBet: cc.Node = null;
	@property(cc.Node)
	wallet: cc.Node = null;
	@property(cc.Node)
	winAmount: cc.Node = null;
	@property(cc.Node)
	turbo: cc.Node = null;
	@property(cc.Node)
	normalSpinButton: cc.Node = null;
	@property(cc.Node)
	freeSpinButton: cc.Node = null;
	@property(cc.Node)
    normalSpinTimes: cc.Node = null;
	@property(cc.Node)
	freeSpinTimes: cc.Node = null;
	@property(cc.Node)
    paylineInfoNormalGame: cc.Node = null;
    @property(cc.Node)
    paylineInfoFreeGame: cc.Node = null;
	@property(cc.Node)
	promotionUI: cc.Node[] = [];
	@property(cc.Node)
    buyFeatureButton: cc.Node = null;
	@property(CutsceneController)
	cutsceneControl: CutsceneController = null;
	@property(PopupControllerModule)
	popupControl: PopupControllerModule = null;

	uiManagerData = null;
	promotionDataModel: eno.PromotionData = null;
	isTrialMode: boolean = false;

	onLoadExtend(): void {
		this.eventManager.on(GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI, this.updateGameModeUI, this);
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this.promotionDataModel = this.gameLogic.getDataModel().PromotionData;
		this.setupObserver();
	}

	setupObserver(): void {
		this.observer.watch(this.uiManagerData, "isTrialModeActive", (isTrialModeActive) => {
			this.onSwitchMode(isTrialModeActive);
		}, this, { fireImmediately: true });
	}

	updateGameModeUI(gameMode: number): void {
		this.hideAllUI();
		this.showUIForGameMode(gameMode);
	}

	showUIForGameMode(gameMode: number): void {
		switch (gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				this.showNormalGameUI();
				break;
			case GAME_MODE_ENUM.FREE_GAME:
			case GAME_MODE_ENUM.FREE_GAME_1:
			case GAME_MODE_ENUM.FREE_GAME_2:
			case GAME_MODE_ENUM.FREE_GAME_3:
			case GAME_MODE_ENUM.FREE_GAME_4:
				this.showFreeGameUI();
				break;
			case GAME_MODE_ENUM.BONUS_GAME:
				this.showBonusGameUI();
				break;
			default:
				warn(`[UIManager] Unknown game mode: ${gameMode}`);
				break;
		}
	}

	setNodeActive(node: cc.Node, active: boolean): void {
		if (node) {
			node.active = active;
		}
	}

	setNodeOpacity(node: cc.Node, opacity: number): void {
		if (node) {
			eno.setOpacity(node, opacity);
		}
	}

	hideAllUI(): void {
		this.hideUIElements();
		this.hidePromotionUI();
		this.hideSpinControls();
		this.hidePaylineInfo();
	}

	hideUIElements(): void {
		this.setNodeActive(this.jackpot, false);
		this.setNodeActive(this.trialJackpot, false);
		this.setNodeActive(this.bet, false);
		this.setNodeActive(this.extraBet, false);
		this.setNodeActive(this.wallet, false);
		this.setNodeActive(this.winAmount, false);
		this.setNodeActive(this.turbo, false);
		this.setNodeActive(this.buyFeatureButton, false);
	}

	hidePromotionUI(): void {
		this.promotionUI.forEach((node) => {
			node.active = false;
		});
	}

	hideSpinControls(): void {
		this.setNodeActive(this.normalSpinButton, false);
		this.setNodeActive(this.freeSpinButton, false);
		this.setNodeActive(this.normalSpinTimes, false);
		this.setNodeActive(this.freeSpinTimes, false);
	}

	hidePaylineInfo(): void {
		this.setNodeOpacity(this.paylineInfoNormalGame, 0);
		this.setNodeOpacity(this.paylineInfoFreeGame, 0);
	}

	showNormalGameUI(): void {
		this.showJackpotUI();
		this.showPromotionUI();
		this.showNormalUIElements();
		this.showNormalSpinControls();
		this.showNormalPaylineInfo();
	}

	showPromotionUI(): void {
		const isActive = this.promotionDataModel.isActive;
		this.promotionUI.forEach((node) => {
			node.active = isActive;
		});
	}

	showNormalUIElements(): void {
		this.setNodeActive(this.bet, true);
		this.setNodeActive(this.extraBet, true);
		this.setNodeActive(this.wallet, true);
		this.setNodeActive(this.winAmount, true);
		this.setNodeActive(this.turbo, true);
		this.setNodeActive(this.buyFeatureButton, true);
	}

	showNormalSpinControls(): void {
		this.setNodeActive(this.normalSpinButton, true);
		this.setNodeActive(this.normalSpinTimes, true);
		this.setNodeActive(this.freeSpinButton, false);
		this.setNodeActive(this.freeSpinTimes, false);
	}

	showNormalPaylineInfo(): void {
		this.setNodeOpacity(this.paylineInfoNormalGame, 255);
		this.setNodeOpacity(this.paylineInfoFreeGame, 0);
	}

	showFreeGameUI(): void {
		this.showJackpotUI();
		this.showFreeUIElements();
		this.showFreeSpinControls();
		this.showPaylineInfoFree();
	}

	showFreeUIElements(): void {
		this.setNodeActive(this.bet, true);
		this.setNodeActive(this.extraBet, true);
		this.setNodeActive(this.wallet, true);
		this.setNodeActive(this.winAmount, true);
		this.setNodeActive(this.turbo, true);
		this.setNodeActive(this.buyFeatureButton, false);
	}

	showFreeSpinControls(): void {
		this.setNodeActive(this.normalSpinButton, false);
		this.setNodeActive(this.normalSpinTimes, false);
		this.setNodeActive(this.freeSpinButton, true);
		this.setNodeActive(this.freeSpinTimes, true);
	}

	showPaylineInfoFree(): void {
		this.setNodeOpacity(this.paylineInfoNormalGame, 0);
		this.setNodeOpacity(this.paylineInfoFreeGame, 255);
	}

	showBonusGameUI(): void {
		// TODO: Implement bonus game UI
		console.log("[UIManager] Bonus game UI not implemented yet");
	}

	showJackpotUI(): void {
		if (this.gameSettings.isTrialMode) {
			this.setNodeActive(this.jackpot, false);
			this.setNodeActive(this.trialJackpot, true);
		} else {
			this.setNodeActive(this.trialJackpot, false);
			this.setNodeActive(this.jackpot, true);
		}
	}

	/**
	 * Switch between trial and real mode
	 */
	onSwitchMode(isTrialModeActive: boolean): void {
		this.isTrialMode = isTrialModeActive;
		this.dataStore.resetDataPS();
		this.dataStore.isTrialMode = isTrialModeActive;
		this.gameSettings.isTrialMode = isTrialModeActive;
	}

	/**
	 * Check if any popup is currently displaying
	 * Used in SpinButton to block space key
	 */
	checkDisplayPopup(): boolean {
		const isDisplay = this.popupControl.isDisplayPopup() || this.cutsceneControl.isDisplayCutscene() || !this.isSpinVisible();
		this.uiManagerData.setDisplayPopup(isDisplay);
		return isDisplay;
	}

	/**
	 * Check if spin button should be visible
	 * Add more conditions here if needed
	 */
	isSpinVisible(): boolean {
		return true;
	}

	onDestroy(): void {
		this.observer.releaseAll(this.uiManagerData, this);
	}
}

```
