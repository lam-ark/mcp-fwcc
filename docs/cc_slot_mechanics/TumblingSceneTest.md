# TumblingSceneTest

> **Source Path**: `assets/cc-common/cc-slot-mechanics/TumblingReel/scripts/TumblingSceneTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`TumblingSceneTest`** extends `Component`

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
import { SlotTableData, SlotTableModule } from '../../../cc-slot-module/SlotModuleExport';
const { ccclass, property } = _decorator;

@ccclass
export class TumblingSceneTest extends Component {
    @property(SlotTableModule)
    table: SlotTableModule = null;
    
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
		this.table.stopSpin();
	}
	
	fastStop(): void {
		this.table.fastStop();
	}
}


```
