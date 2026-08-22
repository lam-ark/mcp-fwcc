# TurboButton

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/Turbo/TurboButton.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`TurboButton`** extends `SlotBaseModule`

## CC Properties
- `display`

## Key Methods
- `onLoadExtend(): void`
- `loadCacheTurbo(): void`
- `listenEvents(): void`
- `setupObserver(): void`
- `onTurboActive(): void`
- `onTurboEnable(): void`
- `onChangeState(): void`
- `onTurboHover(): void`
- `onTurboExitHover(): void`
- `onTurboClick(): void`
- `playSfxTurbo(): void`
- `onTurboPressed(): void`
- `onTurboCancel(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Node } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { GameUIEvents } from "../../Core/GameUIEvents";
import { SlotGameSettings } from "../../Core/SlotGameSettings";
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
const { inject } = eno;
const { ccclass, property } = _decorator;

@ccclass
export class TurboButton extends SlotBaseModule {
	@property(cc.Node) display: cc.Node = null;
	@property sfxTurboOn: string = "BTN_TURBO_ON";
	@property sfxTurboOff: string = "BTN_TURBO_OFF";
	@inject(SlotGameSettings) gameSettings: SlotGameSettings; 

	turboModel: eno.TurboButtonData = null;
	onLoadExtend(): void {
		this.eventManager.on(GameUIEvents.TURBO.LOAD_CACHE_TURBO, this.loadCacheTurbo, this);
		this.turboModel = this.gameLogic.getDataModel().TurboButtonData;
		this.setupObserver();
		this.listenEvents();
	}

	loadCacheTurbo(): void {
		const active = this.turboModel.active;
		this.gameSettings.isTurboActive = active;
		this.display.emit("ON_TURBO_ACTIVE", active);
	}

	listenEvents(): void {
		this.display.on(Node.EventType.MOUSE_ENTER, this.onTurboHover, this);
		this.display.on(Node.EventType.MOUSE_LEAVE, this.onTurboExitHover, this);
		this.display.on(Node.EventType.TOUCH_START, this.onTurboPressed, this);
		this.display.on(Node.EventType.TOUCH_END, this.onTurboClick, this);
		this.display.on(Node.EventType.TOUCH_CANCEL, this.onTurboCancel, this);
	}

	setupObserver(): void {
		this.observer.watch(this.turboModel, "active", this.onTurboActive.bind(this), this, { fireImmediately: true });
		this.observer.watch(this.turboModel, "interactable", this.onTurboEnable.bind(this), this);
		this.observer.watch(this.turboModel, "state", this.onChangeState.bind(this), this);
	}

	onTurboActive(active): void {
		this.gameSettings.isTurboActive = active;
		this.display.emit("ON_TURBO_ACTIVE", active);
	}

	onTurboEnable(interactable): void {
		// to do
	}
	
	onChangeState(state): void {
		this.display.emit("TURBO_BUTTON_STATE_CHANGE", state);
	}

	onTurboHover(): void {
		this.gameLogic.emit(GameLogicUIEvents.TURBO_BUTTON_HOVER);
	}

	onTurboExitHover(): void {
		this.gameLogic.emit(GameLogicUIEvents.TURBO_BUTTON_EXIT_HOVER);
	}

	onTurboClick(): void {
		this.playSfxTurbo();
		
		this.gameLogic.emit(GameLogicUIEvents.TURBO_BUTTON_CLICK);
	}

	playSfxTurbo(): void {
		if (!this.soundPlayer) {
			return;
		}
		const active = this.turboModel.active;
		if (this.sfxTurboOn && this.sfxTurboOff) {
			this.soundPlayer.playSfx(active ? this.sfxTurboOff : this.sfxTurboOn);
		} else {
			this.soundPlayer.playSFXClick();
		}
	}

	onTurboPressed(): void {
		this.gameLogic.emit(GameLogicUIEvents.TURBO_BUTTON_PRESSED);
	}

	onTurboCancel(): void {
		this.gameLogic.emit(GameLogicUIEvents.TURBO_BUTTON_CANCEL);
	}

	onDestroy(): void {
		this.observer.releaseAll(this.turboModel, this);
	}
}

```
