# HorizontalTableModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`HorizontalTableModule`** extends `SlotTableModule`

## Key Methods
- `onLoadExtend(): void`
- `initTable(): void`

## Source Implementation
```typescript
const { _decorator, instantiate, warn } = cc;
import { SlotTableModule } from "../../../cc-slot-module/SlotModuleExport";
import { HorizontalTableConfig } from "./HorizontalTableConfig";
import { HorizontalTableData } from "./HorizontalTableData";
import { HorizontalReelModule } from "./HorizontalReelModule";

const { ccclass } = _decorator;

@ccclass
export class HorizontalTableModule extends SlotTableModule {
	protected config: HorizontalTableConfig;
	protected _slotTableData: HorizontalTableData;

	onLoadExtend(): void {
		this.config = this.getComponent(HorizontalTableConfig);
		if (!this.config) {
			warn("Config not add to this node");
			return;
		}

		this.currentMode = this.config.MODES.NORMAL;
		this._slotTableData = this.getComponent(HorizontalTableData);
	}

	initTable(): void {
		const horizontalReel = instantiate(this.reelPrefab);
		horizontalReel.setPosition(0, 0);
		horizontalReel.setParent(this.table);

		const reelComponent = horizontalReel.getComponent(HorizontalReelModule);
		reelComponent.initReel({ reelIndex: 0, config: this.config, pool: this.symbolManager });
		this.reels.push(reelComponent);
		this.showBeautyMatrix();
	}
	
}

```
