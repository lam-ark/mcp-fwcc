# MenuPanel

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/MenuPanel/MenuPanel.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`MenuPanel`** extends `BaseUIPopup`

## CC Properties
- `public`
- `public`
- `public`
- `public`
- `buttonLayout`
- `autoHideMenuPanel`

## Key Methods
- `onLoadExtend(): void`
- `start(): void`
- `updateButtonLayout(): void`
- `setupObserver(): void`
- `init(): void`
- `onEnableBGM(): void`
- `onEnableSFX(): void`
- `toggleMusic(): void`
- `toggleSFX(): void`
- `onShowPaytable(): void`
- `onShowInfo(): void`
- `onShowBetHistory(): void`
- `openPanel(): void`
- `closePanel(): void`
- `onCloseMenuPanel(): void`

## Source Implementation
```typescript
const { _decorator, Layout } = cc;
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
import { BaseUIPopup } from "../../Popup/BaseUIPopup";
const { ccclass, property } = _decorator;

@ccclass
export class MenuPanel extends BaseUIPopup {
	@property({ type: cc.Node })
	public musicOff: cc.Node = null;
	@property({ type: cc.Node })
	public musicOn: cc.Node = null;
	@property({ type: cc.Node })
	public sfxOff: cc.Node = null;
	@property({ type: cc.Node })
	public sfxOn: cc.Node = null;
	@property({type: Layout}) buttonLayout: cc.Layout = null;
	@property
	spacingX: number = 8;
	@property({ tooltip: "Auto hide menu panel when open other panel" })
	autoHideMenuPanel: boolean = false;

	initialized: boolean = false;
	gameSettingData = null;
	uiManagerData = null;

	onLoadExtend(): void {
		super.onLoadExtend();
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this.gameSettingData = this.gameLogic.getDataModel().GameSettingData;
		this.setupObserver();
		this.init();
	}

	protected start(): void {
		this.updateButtonLayout();
	}

	updateButtonLayout(): void {
		const { LOGIN_IFRAME } = eno.environment.getConfig();
		const isEnableHomeBtn = eno.gameCommonUtils.checkConditionCloseGameIframe();
		if (this.buttonLayout && this.spacingX && LOGIN_IFRAME && !isEnableHomeBtn) {
			this.buttonLayout.spacingX = this.spacingX;
			this.buttonLayout.updateLayout();
		}
	}

	setupObserver(): void {
		this.observer.watch(this.uiManagerData, "isMenuPanelOpen", (isOpen) => {
			if (isOpen) {
				this.openPanel();
			} else {
				this.closePanel();
			}
		}, this, { fireImmediately: true });
		this.observer.watch(this.gameSettingData, "isEnableBGM", this.onEnableBGM.bind(this), this);
		this.observer.watch(this.gameSettingData, "isEnableSFX", this.onEnableSFX.bind(this), this);
	}

	init(): void {
		// Its some weird sound with Toggle sound when init, so this.initialized is the work around
		this.musicOn.active = this.gameSettingData.isEnableBGM;
		this.musicOff.active = !this.gameSettingData.isEnableBGM;
		this.sfxOn.active = this.gameSettingData.isEnableSFX;
		this.sfxOff.active = !this.gameSettingData.isEnableSFX;

		this.initialized = true;
	}

	onEnableBGM(isEnableBGM: boolean): void {
		this.musicOn.active = isEnableBGM;
		this.musicOff.active = !isEnableBGM;

		if (this.soundPlayer) {
			this.soundPlayer.setBgmEnable(isEnableBGM);
		}
	}

	onEnableSFX(isEnableSFX: boolean): void {
		this.sfxOn.active = isEnableSFX;
		this.sfxOff.active = !isEnableSFX;

		if (this.soundPlayer) {
			this.soundPlayer.setEffectEnable(isEnableSFX);
		}
	}

	toggleMusic(): void {
		this.gameLogic.emit(GameLogicUIEvents.TOGGLE_BGM);
		if (this.soundPlayer && this.initialized) {
			this.soundPlayer.playSFXClick();
		}
	}

	toggleSFX(): void {
		this.gameLogic.emit(GameLogicUIEvents.TOGGLE_SFX);
		if (this.soundPlayer && this.initialized) {
			this.soundPlayer.playSFXClick();
		}
	}

	onShowPaytable(): void {
		this.playSfxClick();
		this.gameLogic.emit(GameLogicUIEvents.OPEN_PAY_TABLE_PANEL);
		if (this.autoHideMenuPanel) {
			this.gameLogic.emit(GameLogicUIEvents.CLOSE_MENU_PANEL);
		}
	}

	onShowInfo(): void {
		this.playSfxClick();
		this.gameLogic.emit(GameLogicUIEvents.OPEN_INFO_PANEL);
		if (this.autoHideMenuPanel) {
			this.gameLogic.emit(GameLogicUIEvents.CLOSE_MENU_PANEL);
		}
	}

	onShowBetHistory(): void {
		this.playSfxClick();
		this.gameLogic.emit(GameLogicUIEvents.OPEN_BET_HISTORY_PANEL);
		if (this.autoHideMenuPanel) {
			this.gameLogic.emit(GameLogicUIEvents.CLOSE_MENU_PANEL);
		}
	}

	openPanel(): void {
		this.togglePopup(true);
	}

	closePanel(): void {
		this.togglePopup(false);
	}

	onCloseMenuPanel(): void {
		this.playSfxClick();
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_MENU_PANEL);
	}

	playSfxClick(): void {
        if (this.soundPlayer && this.initialized) {
            this.soundPlayer.playSFXClick();
        }
    }

	protected onDestroy(): void {
		this.observer.releaseAll(this.uiManagerData, this);
		this.observer.releaseAll(this.gameSettingData, this);
	}
}

```
