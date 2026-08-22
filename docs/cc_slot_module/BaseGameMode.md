# BaseGameMode

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/BaseGameMode.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`BaseGameMode`** extends `SlotBaseModule`

## Key Methods
- `init(): void`
- `stateResume(): void`
- `stateUpdate(): void`
- `show(): void`
- `exit(): void`
- `hide(): void`
- `enter(): void`
- `reset(): void`
- `onBackToGameMode(): Promise<void>`
- `resetCallbackWhenHide(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { HelpDocuments } from "../Components/Common/HelpDocuments";
import { SlotBaseModule } from "../Core/SlotBaseModule";

const { ccclass, help } = _decorator;
const { setOpacity } = eno;

@ccclass
@help(HelpDocuments.GAME_MODE_DOCUMENT)
export class BaseGameMode extends SlotBaseModule {
	protected callBackWhenHide: Function = () => {};

	init(isActive = false): void {
		this.node.emit("GAME_INIT");
		this.node.active = false;
		setOpacity(this.node, 1);
		if (isActive) {
			setOpacity(this.node, 255);
			this.node.active = true;
		}
	}

	stateResume(callback: Function): void {
		this.node.emit("GAME_RESUME");

		if (callback && typeof callback == "function") {
			callback();
		}
	}

	stateUpdate(callback: Function): void {
		this.node.emit("GAME_UPDATE");

		if (callback && typeof callback == "function") {
			callback();
		}
	}

	show(callback: Function = null): void {
		this.node.active = true;
		setOpacity(this.node, 255);
		this.node.emit("GAME_SHOW");
		if (callback && typeof callback == "function") {
			callback();
		}
	}

	exit(): void {
		if (this.callBackWhenHide && typeof this.callBackWhenHide == "function") {
			this.callBackWhenHide();
			this.callBackWhenHide = null;
		}
		this.hide();
		this.node.emit("GAME_EXIT");
		this.node.active = false;
	}

	hide(callback: Function = null): void {
		setOpacity(this.node, 1);
		this.node.emit("GAME_HIDE");
		if (callback && typeof callback == "function") {
			callback();
		}
		this.node.active = false;
	}

	enter(data?: any, callback?: Function): void {
		this.node.active = true;
		this.show();
		this.callBackWhenHide = callback;
		this.node.emit("GAME_ENTER", data);
	}

	reset(callback: Function): void {
		this.node.emit("GAME_RESET");
		if (callback && typeof callback == "function") {
			callback();
		}
	}

	async onBackToGameMode(fromMode: number): Promise<void> {
		return this.node["director"].onBackToGameMode(fromMode);
	}

	resetCallbackWhenHide(): void {
		if (this.callBackWhenHide && typeof this.callBackWhenHide == "function") {
			this.callBackWhenHide = null;
		}
	}
}

```
