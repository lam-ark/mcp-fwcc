# NudgeSceneTest

> **Source Path**: `assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeSceneTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`NudgeSceneTest`** extends `Component`

## CC Properties
- `table`

## Key Methods
- `start(): void`
- `startSpin(): void`
- `stopWithRandomMatrix(): void`
- `fastStop(): void`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
import { SlotTableData } from '../../../cc-slot-module/SlotModuleExport';
import { NudgeTableModule } from './NudgeTableModule';
const { ccclass, property } = _decorator;

@ccclass
export class NudgeSceneTest extends Component {
    @property(NudgeTableModule)
    table: NudgeTableModule = null;
    
    start(): void {
        this.table.initTable();
    }

    startSpin(): void {
		this.table.startSpin();
		this.scheduleOnce(() => {
			this.stopWithRandomMatrix();
		}, 0.3);
	}

	stopWithRandomMatrix(): void {
        const slotData = this.table.getComponent(SlotTableData);
        slotData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5].map(String);
        slotData["nud"] = ["1:6:-1"];
		this.table.stopSpin();

        this.scheduleOnce(() => {
            (this.table as NudgeTableModule).prepareNudge();
        }, 4);
	}
	
	fastStop(): void {
		this.table.fastStop();
	}
}


```
