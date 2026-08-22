# CompositeCascade

> **Source Path**: `assets/cc-common/cc-slot-features/CompositeCascade/scripts/CompositeCascade.ts`

## Overview
TypeScript module from `cc-common/cc-slot-features`.

## Classes
- **`export`**
- **`CompositeCascade`** extends `SlotBaseModule`

## CC Properties
- `verticalCascadeModule`
- `horizontalCascadeModule`

## Key Methods
- `onLoadExtend(): void`
- `registerEvents(): void`
- `startRespin(): void`
- `stopRespin(): Promise<void>`
- `resetAllEffectAndTasks(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { HorizontalCascadeModule } from "../../../cc-slot-mechanics/HorizontalCascade/HorizontalCascadeExport";
import { SlotBaseModule } from "../../../cc-slot-module/SlotModuleExport";
import { VerticalCascadeModule } from "../../../cc-slot-module/SlotModuleExport";
import { SlotGameSettings } from "../../../cc-slot-module/SlotModuleExport";
import { CompositeCascadeData } from "./CompositeCascadeData";
const { inject } = eno;

const { ccclass, property } = _decorator;

@ccclass
export class CompositeCascade extends SlotBaseModule {
	@property({ type: VerticalCascadeModule }) verticalCascadeModule: VerticalCascadeModule = null;
	@property({ type: HorizontalCascadeModule }) horizontalCascadeModule: HorizontalCascadeModule = null;
	@inject(SlotGameSettings) gameSettings: SlotGameSettings;

protected _compositeCascadeData: CompositeCascadeData;

	onLoadExtend(): void {
		this._compositeCascadeData = this.getComponent(CompositeCascadeData);
	}

	protected registerEvents(): void {
		if (this.moduleEvent) {
			this.moduleEvent.on("TABLE_START_RESPIN", this.startRespin, this);
			this.moduleEvent.on("TABLE_STOP_RESPIN", this.stopRespin, this);
		}
	}

	startRespin(): void {
		const { verticalMatrix, horizonMatrix, listTraceWayVertical, listTraceWayHorizontal } = this._compositeCascadeData.formatData();
		this.verticalCascadeModule.startRespin(verticalMatrix, listTraceWayVertical);
		this.horizontalCascadeModule.startRespin(horizonMatrix, listTraceWayHorizontal);
	}

	async stopRespin(): Promise<void> {
		const { verticalMatrix, horizonMatrix, listTraceWayVertical, listTraceWayHorizontal } = this._compositeCascadeData.formatData();
		const verticalCascadePromise = this.verticalCascadeModule.stopRespin(verticalMatrix, listTraceWayVertical);
		const horizontalCascadePromise = this.horizontalCascadeModule.stopRespin(horizonMatrix, listTraceWayHorizontal);
		await Promise.all([verticalCascadePromise, horizontalCascadePromise]);
	}

	//cover case B2R before start event stopRespin, ensure all modules get the latest matrix
	resetAllEffectAndTasks(): void {
		const { verticalMatrix, horizonMatrix } = this._compositeCascadeData.formatData();
		this.verticalCascadeModule.updateLatestMatrix(verticalMatrix);
		this.horizontalCascadeModule.updateLatestMatrix(horizonMatrix);
	}

	onDestroy(): void {
		this.unregisterEvents();
	}

}
```
