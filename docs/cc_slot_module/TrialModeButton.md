# TrialModeButton

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/TrialMode/TrialModeButton.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`TrialModeButton`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `onActivePromotion(): void`
- `getButton(): cc.Button`
- `onActiveButton(): void`
- `onEnableButton(): void`
- `disableTrialButton(): void`
- `resetTrialButton(): void`
- `requestPlayTrial(): void`
- `hideCurrentPopups(): void`
- `playSfxPlayTrial(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Button } = cc;
import { GameLogicUIEvents } from '../../Core/GameLogicUIEvents';
import { GameUIEvents } from '../../Core/GameUIEvents';
import { SlotBaseModule } from '../../Core/SlotBaseModule';
const { ccclass, property } = _decorator;

@ccclass
export class TrialModeButton extends SlotBaseModule {
	@property
	needToCloseInfo: boolean = true;
	@property
	needToCloseSettings: boolean = false;
	@property
	sfxPlayTrialId: string = "BTN_DEMOPLAY";

	trialModeData: eno.TrialModeData = null;
	uiManagerData: eno.UIManagerData = null;
	promotionDataModel: eno.PromotionData = null;
	_trialButton: cc.Button = null;
	_lastState: boolean = false;
	hasPromotion: boolean = false;

	onLoadExtend(): void {
		this._trialButton = this.getButton();
		this.eventManager.on(GameUIEvents.CUTSCENES.SHOW_FULL_DISPLAY_CUTSCENE, this.disableTrialButton, this);
		this.eventManager.on(GameUIEvents.CUTSCENES.HIDE_FULL_DISPLAY_CUTSCENE, this.resetTrialButton, this);

		this.setupObserver();
	}

	setupObserver(): void {
		this.trialModeData = this.gameLogic.getDataModel().TrialModeData;
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this.promotionDataModel = this.gameLogic.getDataModel().PromotionData;
		this.observer.watch(this.trialModeData, 'isButtonTrialActive', this.onActiveButton.bind(this), this, { fireImmediately: true });
		this.observer.watch(this.uiManagerData, 'isUserInteractionEnabled', this.onEnableButton.bind(this), this, { fireImmediately: true });
		this.observer.watch(this.promotionDataModel, 'isActive', this.onActivePromotion.bind(this), this, { fireImmediately: true });
	};

	onActivePromotion(active): void {
		this.hasPromotion = active;
	}

	getButton(): cc.Button {
		return this.node.getComponent(cc.Button);
	}

	onActiveButton(active): void {
		this.node.active = active;
	}

	onEnableButton(onEnable): void {
		if (this.hasPromotion) {
			onEnable = false;
		}
		this._lastState = onEnable;
		this._trialButton.interactable = onEnable;
	}

	disableTrialButton(): void {
		this._trialButton.interactable = false;
	}

	resetTrialButton(): void {
		this._trialButton.interactable = this._lastState;

	}

	requestPlayTrial(event): void {
		event.stopPropagation();
		this.playSfxPlayTrial();
		this.hideCurrentPopups();
		this.gameLogic.emit(GameLogicUIEvents.REQUEST_PLAY_TRIAL);
	}

	hideCurrentPopups(): void {
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_MENU_PANEL);
		if (this.needToCloseInfo) {
			this.gameLogic.emit(GameLogicUIEvents.CLOSE_INFO_PANEL);
		}
		if (this.needToCloseSettings) {
			this.gameLogic.emit(GameLogicUIEvents.CLOSE_SETTINGS_PANEL);
		}
	}

	playSfxPlayTrial(): void {
		if (!this.soundPlayer) {
			return;
		}
		if (this.sfxPlayTrialId) {
			this.soundPlayer.playSfx(this.sfxPlayTrialId);
		} else {
			this.soundPlayer.playSFXClick();
		}
	}

	protected onDestroy(): void {
		this.observer.releaseAll(this.trialModeData, this);
		this.observer.releaseAll(this.uiManagerData, this);
		this.observer.releaseAll(this.promotionDataModel, this);
	}
}


```
