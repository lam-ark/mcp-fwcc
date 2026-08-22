# SlotTableMegaModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/MegaReel/scripts/SlotTableMegaModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`SlotTableMegaModule`** extends `SlotTableModule`

## Key Methods
- `onLoadExtend(): void`
- `stopSpin(): Promise<void>`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotTableModule, TableSpinState } from '../../../cc-slot-module/SlotModuleExport';
import { MegaReelData } from './MegaReelData';
const { ccclass } = _decorator;

@ccclass
export class SlotTableMegaModule extends SlotTableModule {

    protected _slotTableData: MegaReelData;
    protected megaData: any[] = [];
    protected hasMulti: boolean = false;

    onLoadExtend(): void {
        super.onLoadExtend();
        this._slotTableData = this.getComponent(MegaReelData);
    }

    stopSpin(matrix?: string[][], _forceStop?: boolean): Promise<void> {
		this._matrix = matrix || this._slotTableData.getMatrix();
        
        this.megaData = this._slotTableData.formatMegaData();
        this.hasMulti = this.megaData.filter(data => data.length > 0).length > 2;
        
		this._lastMatrix = [...this._matrix];
		this.onChangeState(TableSpinState.SHOWING_RESULT);

		this.reels.forEach((reelComponent, index) => {
            const reelData = {
                symbols: [...this._matrix[index]],
                megaData: this.megaData[index],
                hasMulti: this.hasMulti
            };
			reelComponent.showResult(reelData, this.onReelStop.bind(this), this.onReelPreStop.bind(this));

		});

		this.node.emit("SETUP_NEARWIN", { matrix: this._matrix, isTurboActive: this.currentMode.isTurbo, context: this });

		return new Promise((resolve) => {
			this._tableStopCB = resolve;
		});
	}

}


```
