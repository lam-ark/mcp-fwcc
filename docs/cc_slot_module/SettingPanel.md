# SettingPanel

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/Setting/SettingPanel.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SettingPanel`** extends `BaseUIPopup`

## CC Properties
- `bgmToggle`
- `sfxToggle`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `start(): void`
- `init(): void`
- `onEnableBGM(): void`
- `onEnableSFX(): void`
- `onSettingOpen(): void`
- `onSfxToggle(): void`
- `onBgmToggle(): void`
- `onExit(): void`
- `onShowJackpotHistory(): void`
- `onShowBetHistory(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
import { BaseUIPopup } from "../BaseUIPopup";
const { ccclass, property } = _decorator;

@ccclass
export class SettingPanel extends BaseUIPopup {
	@property(cc.Toggle) bgmToggle: cc.Toggle = null;
	@property(cc.Toggle) sfxToggle: cc.Toggle = null;
	initialized: boolean = false;
	gameSettingData = null;
	uiManagerData = null;

	onLoadExtend(): void {
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this.gameSettingData = this.gameLogic.getDataModel().GameSettingData;
		this.setupObserver();
		super.onLoadExtend();
	}

	setupObserver(): void {
		this.observer.watch(this.uiManagerData, 'isSettingsOpen', this.onSettingOpen.bind(this), this);
		this.observer.watch(this.gameSettingData, "isEnableBGM", this.onEnableBGM.bind(this), this);
		this.observer.watch(this.gameSettingData, "isEnableSFX", this.onEnableSFX.bind(this), this);
	}

	start(): void {
		this.init();
	}

	init(): void {
		// Its some weird sound with Toggle sound when init, so this.initialized is the work around
		this.bgmToggle.isChecked = this.gameSettingData.isEnableBGM;
		this.sfxToggle.isChecked = this.gameSettingData.isEnableSFX;

		this.initialized = true;
	}

	onEnableBGM(isEnableBGM: boolean): void {
		this.bgmToggle.isChecked = isEnableBGM;
		if (this.soundPlayer) {
			this.soundPlayer.setBgmEnable(isEnableBGM);
		}
	}

	onEnableSFX(isEnableSFX: boolean): void {
		this.sfxToggle.isChecked = isEnableSFX;

		if (this.soundPlayer) {
			this.soundPlayer.setEffectEnable(isEnableSFX);
		}
	}

	onSettingOpen(isActive: boolean): void {
		this.togglePopup(isActive);
	}

	onSfxToggle(): void {
		if (this.soundPlayer && this.initialized) {
			this.gameLogic.emit(GameLogicUIEvents.TOGGLE_SFX);
			this.soundPlayer.playSFXClick();
		}
	}

	onBgmToggle(): void {
		if (this.soundPlayer && this.initialized) {
			this.gameLogic.emit(GameLogicUIEvents.TOGGLE_BGM);
			this.soundPlayer.playSFXClick();
		}
	}

	onExit(): void {
		if (this.popupBehavior && this.popupBehavior.isPlaying()) {
			return;
		}
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_SETTINGS_PANEL);
	}

	onShowJackpotHistory(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.OPEN_JACKPOT_HISTORY_PANEL);
	}

	onShowBetHistory(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.OPEN_BET_HISTORY_PANEL);
	}

	onDestroy(): void {
		this.observer.releaseAll(this.gameSettingData, this);
		this.observer.releaseAll(this.uiManagerData, this);
	}
}

```
