# SlotButtonNormal

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/SpinButton/SlotButtonNormal.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotButtonNormal`** extends `SlotButtonModule`

## CC Properties
- `textSpin`
- `textHoldToAuto`
- `textPressToStop`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `showPromotionUI(): void`
- `onSwitchingMode(): void`
- `addEventListeners(): void`
- `removeEventListeners(): void`
- `onSpinHover(): void`
- `onSpinExitHover(): void`
- `onSpinClick(): void`
- `playSfxSpin(): void`
- `onStopClick(): void`
- `onTouchStart(): void`
- `onTouchCancel(): void`
- `onChangeButtonState(): void`
- `onChangeSpinState(): void`

## Source Implementation
```typescript
const { _decorator, Button, Node } = cc;
import { SlotButtonModule } from "./SlotButtonModule";
import { SPIN_BUTTON_STATE_ENUM } from "../../Components/Common/SlotEnum";
import { SlotGameSettings } from "../../Core/SlotGameSettings";
import { GameUIEvents } from "../../Core/GameUIEvents";
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
const { inject } = eno;
const { ccclass, property } = _decorator;

@ccclass
export class SlotButtonNormal extends SlotButtonModule {
	@property(cc.Sprite)
	textSpin: cc.Sprite = null;
	@property(cc.SpriteFrame)
	textHoldToAuto: cc.SpriteFrame = null;
	@property(cc.SpriteFrame)
	textPressToStop: cc.SpriteFrame = null;
	@property skipSound: boolean = false;
	@property sfxSpinId: string = "BTN_SPIN";
	@property holdToAutoSpin: boolean = true;
	@property holdTime: number = 0.7;
	@inject(SlotGameSettings) gameSettings: SlotGameSettings = null;

	uiManagerModel: eno.UIManagerData = null;
	promotionDataModel: eno.PromotionData = null;
	_isSwitchingMode: boolean = false;
	isHold: boolean = false;
	hasPromotion: boolean = false;
	holdAction: Function = null;
	state: number = 0;

	onLoadExtend(): void {
		this.modelName = "SpinButtonNormal";
		this.onChangeTextHoldToAuto();
		this.eventManager.on(GameUIEvents.CUTSCENES.SHOW_FULL_DISPLAY_CUTSCENE, this.cancelButtonEvents, this);
		super.onLoadExtend();
	}

	setupObserver(): void {
		this.uiManagerModel = this.gameLogic.getDataModel().UIManagerData;
		this.promotionDataModel = this.gameLogic.getDataModel().PromotionData;
		this.observer.watch(this.buttonModel, "state", (state) => {
			this.onChangeDisplayState(state);
			this.onChangeButtonState(state);
		}, this);
		this.observer.watch(this.buttonModel, "spinState", (state) => {
			this.onChangeSpinState(state);
		}, this);
		this.observer.watch(this.promotionDataModel, "isActive", this.showPromotionUI.bind(this), this);
		this.observer.watch(this.uiManagerModel, "isSwitchingMode", this.onSwitchingMode.bind(this), this);
	}

	showPromotionUI(isActive: boolean): void {
		if (this.textSpin) {
			this.textSpin.node.active = !isActive;
		}
		this.hasPromotion = isActive;
	}

	onSwitchingMode(isSwitching: boolean): void {
		this._isSwitchingMode = isSwitching;
		this.removeEventListeners();
		if (!isSwitching) {
			this.addEventListeners();
		}
		this.cancelButtonEvents();
	}

	addEventListeners(): void {
		super.addEventListeners();

		this.touchNode.on(Node.EventType.MOUSE_ENTER, this.onSpinHover, this);
		this.touchNode.on(Node.EventType.MOUSE_LEAVE, this.onSpinExitHover, this);
		this.touchNode.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
		this.touchNode.on(Node.EventType.TOUCH_END, this.onTouchCancel, this);
		this.touchNode.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
	}

	removeEventListeners(): void {
		super.removeEventListeners();
		this.touchNode.off(Node.EventType.MOUSE_ENTER, this.onSpinHover, this);
		this.touchNode.off(Node.EventType.MOUSE_LEAVE, this.onSpinExitHover, this);
		this.touchNode.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
		this.touchNode.off(Node.EventType.TOUCH_END, this.onTouchCancel, this);
		this.touchNode.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
	}

	onSpinHover(): void {
		this.gameLogic.emit(GameLogicUIEvents.NORMAL_SPIN_HOVERED);
	}

	onSpinExitHover(): void {
		this.onTouchCancel();
		this.gameLogic.emit(GameLogicUIEvents.NORMAL_SPIN_CANCEL_HOVERED);
	}

	onSpinClick(): void {
		if (this._isSwitchingMode) {
			return;
		}
		if (!this.isHold) {
			// this.playSfxSpin();
			this.gameLogic.emit(GameLogicUIEvents.NORMAL_SPIN_CLICKED);
		}
		this.isHold = false;
	}

	playSfxSpin(): void {
		const allowStatePlay = this.state === SPIN_BUTTON_STATE_ENUM.NORMAL || this.state === SPIN_BUTTON_STATE_ENUM.HOVER;
		if (!this.soundPlayer || this.skipSound || !allowStatePlay) {
			return;
		}

		if (this.sfxSpinId) {
			this.soundPlayer.playSfx(this.sfxSpinId);
		} else {
			this.soundPlayer.playSFXClick();
		}
	}

	onStopClick(): void {
		this.gameLogic.emit(GameLogicUIEvents.STOP_BUTTON_NORMAL_CLICKED);
	}

	onTouchStart(): void {
		if (!this.holdToAutoSpin || this.hasPromotion) {
			return;
		}

		this.holdAction = () => {
			this.gameLogic.emit(GameLogicUIEvents.START_AUTO_SPIN);
			this.holdAction = null;
			this.isHold = true;
		};
		this.scheduleOnce(this.holdAction, this.holdTime);
	}

	onTouchCancel(): void {
		if (this.holdAction) {
			this.unschedule(this.holdAction);
		}
	}

	onChangeButtonState(state): void {
		if (state === SPIN_BUTTON_STATE_ENUM.NORMAL) {
			this.onTouchCancel();
			this.onChangeTextHoldToAuto();
		} else if (state === SPIN_BUTTON_STATE_ENUM.SPINNING) {
			this.onChangeTextPressToStop();
		}
		this.state = state;
	}

	onChangeSpinState(state): void {
		this.gameSettings.isAutoSpin = state === eno.SPIN_BUTTON.SPIN_STATE.AUTO;
	}

	onChangeTextHoldToAuto(): void {
		if (this.textSpin) {
			this.textSpin.spriteFrame = this.textHoldToAuto;
		}
	}

	onChangeTextPressToStop(): void {
		if (this.textSpin) {
			this.textSpin.spriteFrame = this.textPressToStop;
		}
	}

	onChangeDisplayState(state): void {
		this.display.emit('SPIN_BUTTON_STATE_CHANGE', state, this.gameSettings.isAutoSpin);
	}

	cancelButtonEvents(): void {
		this.display.emit(Node.EventType.TOUCH_CANCEL);
		const buttons = this.node.getComponentsInChildren(Button);
		buttons.forEach(button => {
			const lastState = button.interactable;
			button.interactable = false;
			button.interactable = lastState;
		});
		if (this.holdAction) {
			this.unschedule(this.holdAction);
			this.holdAction = null;
			this.isHold = false;
		}
	}

	onDestroy(): void {
		this.observer.releaseAll(this.promotionDataModel, this);
		this.observer.releaseAll(this.uiManagerModel, this);
		super.onDestroy();
	}
}

```
