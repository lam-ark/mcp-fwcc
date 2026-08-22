# HorizontalCascadeSceneTest

> **Source Path**: `assets/cc-common/cc-slot-mechanics/HorizontalCascade/scripts/HorizontalCascadeSceneTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`HorizontalCascadeSceneTest`** extends `Component`

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
import { HorizontalTableData, HorizontalTableModule } from '../../HorizontalReel/HorizontalReelExport';
import { HorizontalCascadeModule } from './HorizontalCascadeModule';
import { HorizontalCascadeData } from './HorizontalCascadeData';
const { ccclass, property } = _decorator;

@ccclass
export class HorizontalCascadeSceneTest extends Component {
    @property(HorizontalTableModule)
    table: HorizontalTableModule = null;
    @property(HorizontalCascadeModule)
    cascadeModule: HorizontalCascadeModule = null;
    
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
        const slotData = this.table.getComponent(HorizontalTableData);
        slotData["matrix"] = [2,3,3,2,3].map(String);
		this.table.stopSpin();
        
        this.scheduleOnce(() => {
            // fake respin
            const cascadeData = this.cascadeModule.getComponent(HorizontalCascadeData);
            cascadeData["matrix"] = slotData["matrix"];
            cascadeData["traceWay"] = [2];
            this.cascadeModule.startRespin(null, null);
			this.stopRespin();
		}, 2);
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
