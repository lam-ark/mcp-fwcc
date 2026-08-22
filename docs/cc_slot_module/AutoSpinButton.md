# AutoSpinButton

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/AutoSpinPanel/AutoSpinButton.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`AutoSpinButton`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `setEnableButton(): void`
- `onClick(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Button } = cc;
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
import { SlotBaseModule } from "../../Core/SlotBaseModule";
const { ccclass } = _decorator;

@ccclass
export class AutoSpinButton extends SlotBaseModule {
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

	setEnableButton(isEnable: boolean): void {
		this.button.interactable = isEnable;
	}

	onClick(): void {
		this.gameLogic.emit(GameLogicUIEvents.OPEN_AUTO_SPIN_PANEL);
	}

	protected onDestroy(): void {
		this.observer.releaseAll(this.uiManagerData, this);
	}
}

```
