# MenuButton

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/MenuPanel/MenuButton.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`MenuButton`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `setEnableButton(): void`
- `onClick(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Button, } = cc;
import { GameLogicUIEvents } from '../../Core/GameLogicUIEvents';
import { SlotBaseModule } from '../../Core/SlotBaseModule';
const { ccclass, property } = _decorator;

@ccclass
export class MenuButton extends SlotBaseModule {
	button: cc.Button = null;
	uiManagerData = null;

	onLoadExtend(): void {
		this.button = this.node.getComponent(Button);
		this.setupObserver();
	}

	setupObserver(): void {
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this.observer.watch(this.uiManagerData, "isUserInteractionEnabled", this.setEnableButton.bind(this), this, { fireImmediately: true });
	}

	setEnableButton(_isEnable: boolean): void {
		// TODO: check if need to disable button
	}

	onClick(): void {
		this.soundPlayer && this.soundPlayer.playSFXClick();
		this.gameLogic.emit(GameLogicUIEvents.OPEN_MENU_PANEL);
	}

	protected onDestroy(): void {
		this.observer.releaseAll(this.uiManagerData, this);
	}
}


```
