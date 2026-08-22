# BasePaylineComponent

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/scripts/BasePaylineComponent.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BasePaylineComponent`** extends `SlotBaseModule`

## Key Methods
- `init(): void`
- `initExtend(): void`
- `setConfig(): void`
- `registerPaylineEvents(): void`
- `unregisterPaylineEvents(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { PaylineConfig } from "./PaylineConfig";
import { GameConfig } from "../../../../Core/GameConfig";
import { GameModuleEvent } from "../../../../GameMode/GameModuleEvent";
import { SlotBaseModule } from "../../../../Core/SlotBaseModule";
import { GameEventManager } from "../../../../Core/GameEventManager";
const { ccclass } = _decorator;
const { inject } = eno;

@ccclass
export class BasePaylineComponent extends SlotBaseModule {
	//#region Properties

	protected paylineConfig: PaylineConfig = null;
	protected payLineEmitter: cc.EventTarget = null;
	protected isInitialized: boolean = false;

	@inject(GameConfig) protected gameConfig: GameConfig;

	//#endregion

	//#region Public Methods

	public init(data: {
		config: PaylineConfig,
		payLineEmitter: cc.EventTarget,
		moduleEvent: GameModuleEvent,
		eventManager: GameEventManager
	}): void {
		if (this.isInitialized) {
			return;
		}
		this.isInitialized = true;
		this.paylineConfig = data.config;
		this.payLineEmitter = data.payLineEmitter;
		this.moduleEvent = data.moduleEvent;
		this.eventManager = data.eventManager;
		this.setConfig(data.config);
		this.initExtend(data);
		this.registerPaylineEvents();
	}
	//#endregion

	//#region Internal Methods

	protected initExtend(_data): void { }

	protected setConfig(_config: PaylineConfig): void { }

	protected registerPaylineEvents(): void { }

	protected unregisterPaylineEvents(): void {
		if (!this.payLineEmitter) {
			return;
		}
		this.payLineEmitter.targetOff(this);
	}

	protected onDestroy(): void {
		this.unregisterEvents();
	}
	//#endregion
}
```
