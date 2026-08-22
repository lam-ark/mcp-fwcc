# NewFeatureModule

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/templates/scripts/NewFeatureModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`NewFeatureModule`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `registerEvents(): void`
- `newFeatureInit(): void`
- `newFeatureStart(): Promise<void>`
- `fakeTween(): Promise<void>`
- `unregisterEvents(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, log } = cc;
import { SlotBaseModule } from "../../../Core/SlotBaseModule";
import { NewFeatureConfig } from "./NewFeatureConfig";
import { NewFeatureData } from "./NewFeatureData";
const { ccclass } = _decorator;

// 📦 New template module for Slot Game system
// Mandatory inheritance from SlotBaseModule
// Ensure event registration, data, and proper async handling when needed
@ccclass
export class NewFeatureModule extends SlotBaseModule {
	protected config: NewFeatureConfig;
	protected newFeatureData: NewFeatureData;

	onLoadExtend(): void {
		this.config = this.getComponent(NewFeatureConfig);
		this.newFeatureData = this.getComponent(NewFeatureData);
	}

	/** 🔗 Register for GameModuleEvent event here */
	protected registerEvents(): void {
		if (this.moduleEvent) {
			this.moduleEvent.on("NEW_FEATURE_INIT", this.newFeatureInit, this);
			this.moduleEvent.on("NEW_FEATURE_START", this.newFeatureStart, this);
		}
	}

	/** Synchronous function - no need to wait */
	public newFeatureInit(): void {
		log("[NewFeatureModule] NEW_FEATURE_INIT triggered");
	}

	/** Asynchronous function - logic will wait for this function to complete */
	public async newFeatureStart(): Promise<void> {
		log("[NewFeatureModule] NEW_FEATURE_START animation start");
		const matrix = this.newFeatureData.getMatrix();
		await this.fakeTween();
		log("[NewFeatureModule] NEW_FEATURE_START done");
	}

	private fakeTween(): Promise<void> {
		return new Promise((resolve) => this.scheduleOnce(resolve, 1));
	}

	/** 🔗 Unregister for GameModuleEvent event here */
	unregisterEvents(): void {
		if (this.moduleEvent) {
			this.moduleEvent.targetOff(this);
		}
	}

	// unregister event when destroy node
	protected onDestroy(): void {
		this.unregisterEvents();
	}
}

```
