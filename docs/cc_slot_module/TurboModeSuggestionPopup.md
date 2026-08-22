# TurboModeSuggestionPopup

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/TurboModeSuggestionPopup/TurboModeSuggestionPopup.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`TurboModeSuggestionPopup`** extends `BaseUIPopup`

## CC Properties
- `message`

## Key Methods
- `onLoadExtend(): void`
- `start(): void`
- `setupObserver(): void`
- `showTurboIntro(): void`
- `onConfirm(): void`
- `onCancel(): void`
- `playSfxClick(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameConfig } from '../../Core/GameConfig';
import { GameDataStore } from '../../Core/GameDataStore';
import { GameLogicUIEvents } from '../../Core/GameLogicUIEvents';
import { BaseUIPopup } from '../../Popup/BaseUIPopup';
const { inject } = eno;
const { ccclass, property } = _decorator;

@ccclass
export class TurboModeSuggestionPopup extends BaseUIPopup {
	@property(cc.Label) message: cc.Label = null;
	@inject(GameDataStore) dataStore: GameDataStore;
	@inject(GameConfig) gameConfig: GameConfig;

	uiManagerData: eno.UIManagerData;

	onLoadExtend(): void {
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this.gameLogic.emit(GameLogicUIEvents.CHECK_TURBO_MODE_SUGGESTION_POPUP);
		this.setupObserver();
		this.node.active = false;
	}

	protected start(): void {
		this.message.string = this.gameLogic.getGameText("SUGGEST_TURBO");
	}

	setupObserver(): void {
		this.observer.watch(this.uiManagerData, "canShowTurboIntro", (canShowTurboIntro) => {
			this.showTurboIntro(canShowTurboIntro);
		}, this);
	}

	showTurboIntro(canShowTurboIntro: boolean): void {
		if (canShowTurboIntro) {
			this.node.active = true;
		} else {
			this.node.active = false;
		}
	}

	onConfirm(): void {
		this.playSfxClick();
		this.uiManagerData.setCanShowTurboIntro(false);
		this.gameLogic.emit(GameLogicUIEvents.ON_ACTIVE_FROM_TURBO_INTRO);
		this.node.active = false;
	}

	onCancel(): void {
		this.playSfxClick();
		this.uiManagerData.setCanShowTurboIntro(false);
		this.node.active = false;
	}

	playSfxClick(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
	}

	onDestroy(): void {
		this.observer.releaseAll(this.uiManagerData, this);
	}
}


```
