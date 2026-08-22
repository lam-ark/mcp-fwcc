# TurboButtonSwitcher

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/Turbo/TurboButtonSwitcher.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`TurboButtonSwitcher`** extends `SlotBaseModule`

## CC Properties
- `buttonOn`
- `buttonOff`

## Key Methods
- `onLoadExtend(): void`
- `start(): void`
- `loadCacheTurbo(): void`
- `listenEvents(): void`
- `onTurboActive(): void`
- `onTurboHover(): void`
- `onTurboPressed(): void`
- `onTurboStateChange(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { GameUIEvents } from "../../Core/GameUIEvents";
import { BUTTON_STATE } from "./TurboButtonSprite";
const { ccclass, property } = _decorator;

@ccclass
export class TurboButtonSwitcher extends SlotBaseModule {
	@property(cc.Node)
	buttonOn: cc.Node = null;
	@property(cc.Node)
	buttonOff: cc.Node = null;

	activeButton: cc.Node = null;
	modelName: "TurboButtonData";
	turboModel = null;

	onLoadExtend(): void {
		this.modelName = "TurboButtonData";
		this.activeButton = null;
	}

	start(): void {
		this.turboModel = this.gameLogic.getDataModel()[this.modelName];
		this.listenEvents();
		this.loadCacheTurbo();
	}

	loadCacheTurbo(): void {
		this.eventManager.emit(GameUIEvents.TURBO.LOAD_CACHE_TURBO);
	}

	listenEvents(): void {
		this.node.on("ON_TURBO_ACTIVE", this.onTurboActive, this);
		this.node.on("TURBO_BUTTON_STATE_CHANGE", this.onTurboStateChange, this);
	}

	onTurboActive(active): void {
		//reset state of active button
		if(this.activeButton) {
			this.activeButton.emit("TURBO_BUTTON_STATE_CHANGE", BUTTON_STATE.NORMAL);
		}
		
		this.buttonOn.active = active;
		this.buttonOff.active = !active;
		this.activeButton = active ? this.buttonOn : this.buttonOff;
	}

	onTurboHover(isHover): void {
		if (this.activeButton) {
			this.activeButton.emit("ON_TURBO_BUTTON_HOVER", isHover);
		}
	}

	onTurboPressed(isPressed): void {
		if (this.activeButton) {
			this.activeButton.emit("ON_TURBO_BUTTON_PRESSED", isPressed);
		}
	}

	onTurboStateChange(state): void {
		if (this.activeButton) {
			this.activeButton.emit("TURBO_BUTTON_STATE_CHANGE", state);
		}
	}
}

```
