# CascadeWildGenerationSceneTest

> **Source Path**: `assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/CascadeWildGenerationSceneTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`CascadeWildGenerationSceneTest`** extends `Component`

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
import { SlotTableData, SlotTableModule } from '../../../cc-slot-module/SlotModuleExport';
import { CascadeWildGenerationModule } from './CascadeWildGenerationModule';
import { CascadeWildGenerationData } from './CascadeWildGenerationData';
const { ccclass, property } = _decorator;

@ccclass
export class CascadeWildGenerationSceneTest extends Component {
    @property(SlotTableModule)
    table: SlotTableModule = null;
    @property(CascadeWildGenerationModule)
    cascadeModule: CascadeWildGenerationModule = null;
    
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
            const cascadeData = this.cascadeModule.getComponent(CascadeWildGenerationData);
            cascadeData["matrix"] = slotData["matrix"];
            cascadeData["traceWay"] = [1, 3, 7, 8];
            cascadeData["wildAppearPosition"] = "11:11";
            this.cascadeModule.startRespinHandler();
			this.stopRespin();
		}, 4);
	}

    stopRespin(): void {
        this.scheduleOnce(() => {
            this.cascadeModule.stopRespinHandler();
        }, 0.5);
    }
	
	fastStop(): void {
		this.table.fastStop();
	}
}


```
