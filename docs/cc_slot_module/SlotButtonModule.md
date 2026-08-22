# SlotButtonModule

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/SpinButton/SlotButtonModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotButtonModule`** extends `SlotBaseModule`

## CC Properties
- `gameMode`

## Key Methods
- `onLoadExtend(): void`
- `setup(): void`
- `onEnable(): void`
- `onDisable(): void`
- `setupObserver(): void`
- `addEventListeners(): void`
- `removeEventListeners(): void`
- `onKeyUp(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, systemEvent, SystemEvent } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { GAME_MODE_ENUM } from "../../Components/Common/SlotEnum";
import { GameUIEvents } from "../../Core/GameUIEvents";
import { UIManagerModule } from "../../Core/UIManagerModule";
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";


const { ccclass, property } = _decorator;
const { inject } = eno;
@ccclass
export class SlotButtonModule extends SlotBaseModule {
	@property({ type: GAME_MODE_ENUM })
	gameMode = GAME_MODE_ENUM.NORMAL_GAME;
	@property({
		type: cc.Node,
		visible: function () {
			switch (this.gameMode) {
				case GAME_MODE_ENUM.NORMAL_GAME:
				case GAME_MODE_ENUM.FREE_GAME:
				case GAME_MODE_ENUM.FREE_GAME_1:
				case GAME_MODE_ENUM.FREE_GAME_2:
				case GAME_MODE_ENUM.FREE_GAME_3:
				case GAME_MODE_ENUM.LIGHTNING_GAME:
					return true;
				default:
					return false;
			}
		},
		tooltip: "Spin Button Touch Area"
	})
	spinButtonTouch: cc.Node = null;
	@property({
		type: cc.Node,
		visible: function () {
			switch (this.gameMode) {
				case GAME_MODE_ENUM.NORMAL_GAME:
				case GAME_MODE_ENUM.FREE_GAME:
				case GAME_MODE_ENUM.FREE_GAME_1:
				case GAME_MODE_ENUM.FREE_GAME_2:
				case GAME_MODE_ENUM.FREE_GAME_3:
				case GAME_MODE_ENUM.LIGHTNING_GAME:
					return true;
				default:
					return false;
			}
		}
	})
	display: cc.Node = null;

	touchNode: cc.Node = null;
	modelName = "SpinButton";
	buttonModel = null;
	@inject(UIManagerModule) uiManager: UIManagerModule;
	
	onLoadExtend(): void {
		this.eventManager.emit(GameUIEvents.SPIN_BUTTON.SET_UP_BUTTON, { gameMode: this.gameMode, node: this.node });
		this.setup();
	}

	setup(): void {
		this.touchNode = this.spinButtonTouch || this.display;
		this.buttonModel = this.gameLogic.getDataModel()[this.modelName];
		this.setupObserver();
	}

	onEnable(): void {
		this.addEventListeners();
	}

	onDisable(): void {
		this.removeEventListeners();
	}

	setupObserver(): void {}

	addEventListeners(): void {
		systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
	}

	removeEventListeners(): void {
		systemEvent.off(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
	}

	onKeyUp(event): void {
		if (event.keyCode == cc.macro.KEY.space && !this.uiManager.checkDisplayPopup() && !this.gameLogic.getUIManager().hasBlockingPopup()) {
			this.gameLogic.emit(GameLogicUIEvents.TRIGGER_SPACE_BUTTON);
		}
	}

	onDestroy(): void {
		this.observer.releaseAll(this.buttonModel, this);
	}
}

```
