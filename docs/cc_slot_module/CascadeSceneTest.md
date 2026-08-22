# CascadeSceneTest

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/CascadeModule/scripts/CascadeSceneTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`CascadeSceneTest`** extends `Component`

## CC Properties
- `table`
- `cascadeModule`

## Key Methods
- `start(): void`
- `startSpin(): void`
- `stopWithRandomMatrix(): void`
- `stopRespin(): void`
- `fastStop(): void`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
import { VerticalCascadeModule } from './VerticalCascadeModule';
import { CascadeModuleData } from './CascadeModuleData';
import { SlotTableModule } from '../../Table/SlotTable/scripts/SlotTableModule';
import { SlotTableData } from '../../Table/SlotTable/scripts/SlotTableData';
const { ccclass, property } = _decorator;

@ccclass
export class CascadeSceneTest extends Component {
    @property(SlotTableModule)
    table: SlotTableModule = null;
    @property(VerticalCascadeModule)
    cascadeModule: VerticalCascadeModule = null;
    
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
        
        this.scheduleOnce(() => {
            // fake respin
            const cascadeData = this.cascadeModule.getComponent(CascadeModuleData);
            cascadeData["matrix"] = slotData["matrix"];
            cascadeData["traceWay"] = [1, 3, 7, 8];
            this.cascadeModule.startRespin(null, null);
			this.stopRespin();
		}, 4);
	}

    stopRespin(): void {
        this.scheduleOnce(() => {
            this.cascadeModule.stopRespin(null, null);
        }, 0.5);
    }
	
	fastStop(): void {
		this.table.fastStop();
	}
}


```
