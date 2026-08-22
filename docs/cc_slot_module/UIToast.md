# UIToast

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/UIToast/UIToast.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`UIToast`** extends `SlotBaseModule`

## CC Properties
- `toastLabel`

## Key Methods
- `onLoadExtend(): void`
- `registerEvents(): void`
- `onSwitchingMode(): void`
- `onTurboActive(): void`
- `onMinBet(): void`
- `onMaxBet(): void`
- `showToast(): void`
- `hideToast(): void`
- `stopAllTweens(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, tween } = cc;
import { UI_TOAST_ENUM } from "../../Components/Common/SlotEnum";
import { GameUIEvents } from "../../Core/GameUIEvents";
import { SlotBaseModule } from "../../Core/SlotBaseModule";
const { ccclass, property } = _decorator;
const { setOpacity, fadeOut } = eno;

@ccclass
export class UIToast extends SlotBaseModule {
	@property(cc.Label)
	toastLabel: cc.Label = null;
	@property duration = 2;
	@property scaleTime = 0.1;
	@property fadeTime = 0.5;

	_isShowing: boolean = false;
	_isSwitchingMode: boolean = false;
	turboModel: eno.TurboButtonData = null;
	uiManagerModel: eno.UIManagerData = null;

	onLoadExtend(): void {
		setOpacity(this.node, 0);
	}

	registerEvents(): void {
		this.eventManager.on(GameUIEvents.UI_TOAST.HIT_MAX_BET, this.onMaxBet, this);
		this.eventManager.on(GameUIEvents.UI_TOAST.HIT_MIN_BET, this.onMinBet, this);
		this.turboModel = this.gameLogic.getDataModel().TurboButtonData;
		this.uiManagerModel = this.gameLogic.getDataModel().UIManagerData;
		this.observer.watch(this.turboModel, "active", this.onTurboActive.bind(this), this);
		this.observer.watch(this.uiManagerModel, "isSwitchingMode", this.onSwitchingMode.bind(this), this);
	}

	onSwitchingMode(isSwitching: boolean): void {
		this._isSwitchingMode = isSwitching;

	}

	onTurboActive(isActive: boolean): void {
		const message = this.gameLogic.getGameText(isActive ? UI_TOAST_ENUM.TURBO_ON : UI_TOAST_ENUM.TURBO_OFF);
		this.showToast(message);
	}

	onMinBet(): void {
		this.showToast(this.gameLogic.getGameText(UI_TOAST_ENUM.MIN_BET));
	}

	onMaxBet(): void {
		this.showToast(this.gameLogic.getGameText(UI_TOAST_ENUM.MAX_BET));
	}

	showToast(message: string): void {
		if (this._isSwitchingMode) {
			return;
		}
		this.stopAllTweens();

		this.node.active = true;
		setOpacity(this.node, 255);
		this.toastLabel.string = message;
		this._isShowing = true;

		tween(this.node)
			.to(this.scaleTime, { scale: 1.2 })
			.to(this.scaleTime, { scale: 1 })
			.delay(this.duration)
			.call(() => {
				this.hideToast();
			})
			.start();
	}

	hideToast(): void {
		if (!this._isShowing) {
			return;
		}
		this.stopAllTweens();

		fadeOut(this.node, this.fadeTime, {
			onComplete: () => {
				if (this.node) {
					this.node.active = false;
				}
				this._isShowing = false;
			},
		});
	}

	stopAllTweens(): void {
		this.node.stopAllActions();
	}

	onDestroy(): void {
		this.observer.releaseAll(this.turboModel, this);
		this.observer.releaseAll(this.uiManagerModel, this);
		this.stopAllTweens();
	}
}

```
