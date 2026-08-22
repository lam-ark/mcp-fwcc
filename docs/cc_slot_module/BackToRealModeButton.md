# BackToRealModeButton

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/TrialMode/BackToRealModeButton.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BackToRealModeButton`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `onBackToRealModePressed(): void`
- `playSfxBackToReal(): void`
- `setupObserver(): void`
- `activeButton(): void`
- `setEnableButtonBackToReal(): void`
- `cancelButtonEvents(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Button, Node } = cc;
import { SlotBaseModule } from '../../Core/SlotBaseModule';
import { GameUIEvents } from '../../Core/GameUIEvents';
import { GameLogicUIEvents } from '../../Core/GameLogicUIEvents';
const { ccclass, property } = _decorator;

@ccclass
export class BackToRealModeButton extends SlotBaseModule {
	@property
	sfxBackToRealId: string = "";

	_btrButton: cc.Button = null;
	trialModeData: eno.TrialModeData;
	onLoadExtend(): void {
		this.setupObserver();
		this.node.active = false;
		eno.setOpacity(this.node, 0);
		this._btrButton = this.node.getComponent(Button);
		this.eventManager.on("SET_ENABLE_BUTTON_BACK_TO_REAL", this.setEnableButtonBackToReal, this);
		this.eventManager.on(GameUIEvents.CUTSCENES.SHOW_FULL_DISPLAY_CUTSCENE, this.cancelButtonEvents, this);
	};

	onBackToRealModePressed(): void {
		this.playSfxBackToReal();
		this.gameLogic.emit(GameLogicUIEvents.BACK_TO_REAL_MODE);
	};

	playSfxBackToReal(): void {
		if (!this.soundPlayer) {
			return;
		}
		if (this.sfxBackToRealId) {
			this.soundPlayer.playSfx(this.sfxBackToRealId);
		} else {
			this.soundPlayer.playSFXClick();
		}
	}

	setupObserver(): void {
		this.trialModeData = this.gameLogic.getDataModel().TrialModeData;
		this.observer.watch(this.trialModeData, 'isButtonBackToRealActive', this.activeButton.bind(this), this, { fireImmediately: true });
	}

	activeButton(isActive): void {
		this.node.active = isActive;
		eno.setOpacity(this.node, isActive ? 255 : 0);
	}

	setEnableButtonBackToReal(isEnableButton: boolean): void {
		this._btrButton.interactable = isEnableButton;
	}

	cancelButtonEvents(): void {
		this._btrButton.node.emit(Node.EventType.TOUCH_CANCEL);
		const lastState = this._btrButton.interactable;
		this._btrButton.interactable = false;
		this._btrButton.interactable = lastState;
	}

	protected onDestroy(): void {
		this.observer.releaseAll(this.trialModeData, this);
	}
}


```
