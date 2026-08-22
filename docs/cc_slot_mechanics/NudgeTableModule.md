# NudgeTableModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeTableModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`NudgeTableModule`** extends `SlotTableModule`

## Key Methods
- `onLoadExtend(): void`
- `processBeforeStopReels(): void`
- `prepareNudge(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotTableModule } from '../../../cc-slot-module/SlotModuleExport';
import { NudgeTableData } from './NudgeTableData';
import { NudgeReelModule } from './NudgeReelModule';
const { ccclass } = _decorator;

@ccclass
export class NudgeTableModule extends SlotTableModule {

    protected _slotTableData: NudgeTableData;
    
    onLoadExtend(): void {
        super.onLoadExtend();

        this.node.on("PROCESS_BEFORE_STOP_REELS", this.processBeforeStopReels, this);
        this._slotTableData = this.getComponent(NudgeTableData);
    }

    protected processBeforeStopReels(data:{ mode, context }): void {
        const nudgeData = this._slotTableData.getNudgeData();
        // { index, step, direction }
        nudgeData.forEach((nudge) => {
            (this.reels[nudge.index] as NudgeReelModule).setupNudge(nudge);
        })
    }

    prepareNudge(): void {
        const nudgeData = this._slotTableData.getNudgeData();
        // { index, step, direction }
        nudgeData.forEach((data) => {
            (this.reels[data.index] as NudgeReelModule).prepareNudge();
        })
    }
}


```
