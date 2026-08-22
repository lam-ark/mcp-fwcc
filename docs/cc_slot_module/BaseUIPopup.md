# BaseUIPopup

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/BaseUIPopup.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BaseUIPopup`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `closeAllPopups(): void`
- `activePopup(): void`
- `playSfxClick(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameLogicUIEvents } from '../Core/GameLogicUIEvents';
import { SlotBaseModule } from '../Core/SlotBaseModule';
import { FadePopupBehavior } from './Behavior/FadePopupBehavior';
import { PopupBehavior } from './Behavior/PopupBehavior';
const { ccclass } = _decorator;

@ccclass
export class BaseUIPopup extends SlotBaseModule {
	popupBehavior: PopupBehavior = null;
	isClose: boolean = false;
	currentIsActive: boolean = false;
	
	onLoadExtend(): void {
		this.popupBehavior = this.node.getComponent(PopupBehavior);
		if (!this.popupBehavior) {
			this.popupBehavior = this.node.addComponent(FadePopupBehavior);
		}
	}

	closeAllPopups(): void {
		this.playSfxClick();
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_ALL_POPUPS);
	}

	togglePopup(isActive: boolean, cb?: () => void): void {
		if (this.currentIsActive === isActive) {
			return;
		}
		this.currentIsActive = isActive;
		this.isClose = !isActive;
		if (isActive) {
			this.popupBehavior.showPopup(cb);
		} else {
			this.popupBehavior.hidePopup(cb);
		}
	}

	activePopup(isActive: boolean): void {
		this.popupBehavior.activePopup(isActive);
	}

	playSfxClick(): void {
		if (this.isClose) {
			return;
		}
		this.soundPlayer && this.soundPlayer.playSFXClick();
	}
}


```
