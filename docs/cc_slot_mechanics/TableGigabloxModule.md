# TableGigabloxModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/Gigablox/scripts/TableGigabloxModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`TableGigabloxModule`** extends `SlotTableModule`

## Key Methods
- `onLoadExtend(): void`
- `start(): void`
- `onStopReels(): void`
- `setupGigablox(): void`
- `setupReelGigabloxDelay(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { TableGigabloxConfig } from "./TableGigabloxConfig";
import { TableGigabloxData } from "./TableGigabloxData";
import { GigabloxReelModule } from "./GigabloxReelModule";

import { SlotTableModule } from "../../../cc-slot-module/SlotModuleExport";
import { HelpDocuments } from "../../../cc-slot-module/Components/Common/HelpDocuments";

const { ccclass, help } = _decorator;

@ccclass
@help(HelpDocuments.GIGABLOX_TABLE_MODULE)
export class TableGigabloxModule extends SlotTableModule {

	protected config: TableGigabloxConfig;
	protected _slotTableData: TableGigabloxData;

	protected _bloxes: any = [];

	onLoadExtend(): void {
		this.config = this.getComponent(TableGigabloxConfig);
		this._slotTableData = this.getComponent(TableGigabloxData);
		this.getConfigValue();
	}

	start(): void {
		this.node.on("PROCESS_BEFORE_STOP_REELS", this.onStopReels, this);
	}

	protected onStopReels({ mode, context }): void {
		const { blox } = this._slotTableData.getCustomMatrix();
		this._bloxes = blox;
		
		this.setupGigablox(context);
		this.setupReelGigabloxDelay(context);
	}

	protected setupGigablox(context): void {
		for (let i = 0; i < this._bloxes.length; i++) {
			const { col, size } = this._bloxes[i];
			for (let j = col; j <= col + size - 1; j++) {
				(context.reels[j] as GigabloxReelModule).setupGigaBlox(this._bloxes[i]);
			}
		}
	}

	protected setupReelGigabloxDelay(context): void {
		let i = 0;
		let reelIndex = 0;
		let reelDelay = 0;
		while (reelIndex < context.reels.length) {
			(context.reels[reelIndex] as GigabloxReelModule).gigabloxDelay = reelDelay;
			if (i < this._bloxes.length) {
				const blox = this._bloxes[i];
				if (reelIndex < blox.col) {
					reelDelay++;
				} else if (reelIndex == blox.col && reelIndex < blox.col + blox.size - 1) {
					// to do
				} else if (reelIndex == blox.col + blox.size - 1) {
					reelDelay++;
					i++;
				}
			} else {
				reelDelay++;
			}
			reelIndex++;
		}
	}

}
```
