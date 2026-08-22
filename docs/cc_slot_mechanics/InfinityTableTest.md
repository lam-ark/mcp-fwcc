# InfinityTableTest

> **Source Path**: `assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`InfinityTableTest`** extends `Component`

## CC Properties
- `table`

## Key Methods
- `start(): void`
- `startSpin(): void`
- `stopWithRandomMatrix(): void`
- `stopRespin1(): void`
- `startRespin2(): void`
- `stopRespin2(): void`
- `fastStop(): void`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
import { InfinityTableData } from './InfinityTableData';
import { InfinityTableModule } from './InfinityTableModule';
const { ccclass, property } = _decorator;

@ccclass
export class InfinityTableTest extends Component {
    @property(InfinityTableModule)
    table: InfinityTableModule = null;
    
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
        const slotData = this.table.getComponent(InfinityTableData);
        slotData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5].map(String);
		this.table.stopSpin();
        
        this.scheduleOnce(() => {
            // fake respin
            this.table.startRespin(null);
			this.stopRespin1();
		}, 3.5);
	}

    stopRespin1(): void {
        this.scheduleOnce(() => {
            const infinityData = this.table.getComponent(InfinityTableData);
            infinityData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5,2,3,4].map(String);
            this.table.stopRespin(null);

            this.startRespin2();
        }, 0.5);
    }

    startRespin2(): void {
        this.scheduleOnce(() => {
            this.table.startRespin(null);
            this.stopRespin2();
        }, 1.5);
    }

    stopRespin2(): void {
        this.scheduleOnce(() => {
            const infinityData = this.table.getComponent(InfinityTableData);
            infinityData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5,2,3,4,5,6,7].map(String);
            this.table.stopRespin(null);
        }, 0.5);
    }
	
	fastStop(): void {
		this.table.fastStop();
	}
}


```
